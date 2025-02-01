import 'dart:js_interop';
import 'dart:typed_data';

import 'package:http/http.dart' as http;
import 'package:web/web.dart' as web;

import '../veb.dart' as veb;

import '../constants.dart';
import '../environment.dart';

import 'crew_stuff.dart';
import 'oauth.dart';

late final String token;

void main() async {
  String? tokenLocal = veb.localStorage.getItem('token');
  if (tokenLocal == null) {
    await startOAuth();
  }

  // CAUTION: May not be the best idea.
  token = veb.localStorage.getItem('token')!;

  final addCrewBtn = veb.getElemById<web.HTMLButtonElement>('add-crew-btn');
  addCrewBtn.onclick = () {
    _addCrew();
  }.toJS;

  final logoutBtn = veb.getElemById<web.HTMLButtonElement>('logout-btn');
  logoutBtn.onclick = () {
    veb.localStorage.removeItem('token');
    web.window.location.replace(frontendDomainWithProtocol);
  }.toJS;

  final crewContainer = veb.getElemById<web.HTMLDivElement>('public-crew');
  final profileCrews = await fetchProfileCrews(token);

  for (final crew in profileCrews) {
    final crewWidget = newCrewItem(crew);
    crewContainer.appendChild(crewWidget);
  }
}

Future<void> _addCrew() async {
  final url = getReqUrl(backendDomain, '/add-crew');
  final response = await http.get(url, headers: {'Authorization': token});

  if (response.statusCode != veb.HttpStatus.created.code) {
    // TODO
    return;
  }

  web.window.location.assign(
    '$frontendDomainWithProtocol/edit-crew/?id=${response.body}',
  );
}

Future<void> _deleteCrew(
  final ProfileCrew crew,
  final web.HTMLDivElement itemDiv,
) async {
  final url = getReqUrl(backendDomain, '/delete-crew');
  final response = await http.delete(
    url,
    headers: {
      'Authorization': veb.localStorage.getItem('token')!,
      'X-Crew-ID': crew.id.toString(),
    },
  );

  if (response.statusCode != veb.HttpStatus.ok.code) {
    // TODO:
    print('FAILED TO DELETE!');
    return;
  }

  itemDiv.remove();
}

String imgUrlFromStr(final String imgStrData) {
  final imgBytes = Uint8List.fromList(imgStrData.codeUnits);

  final picBlob = web.Blob(
    [imgBytes.buffer.toJS].toJS,
    web.BlobPropertyBag(type: 'image/jpeg'),
  );

  final picUrl = web.URL.createObjectURL(picBlob);
  return picUrl;
}

web.HTMLDivElement newCrewItem(final ProfileCrew crew) {
  final crewItemDiv = veb.newElem<web.HTMLDivElement>('div');
  crewItemDiv.className = 'crew-item';

  final crewItemPics = veb.newElem<web.HTMLDivElement>('div');
  crewItemPics.className = 'crew-item-pics';

  for (final image in crew.images) {
    final imgDiv = veb.newElem<web.HTMLDivElement>('div')..className = 'circ';

    if (image == null) {
      imgDiv.innerHTML = personSvgHtml.toJS;
    } else {
      final url = imgUrlFromStr(image);
      imgDiv.style.backgroundImage = 'url($url)';
    }

    crewItemPics.appendChild(imgDiv);
  }

  final crewItemFooter = veb.newElem<web.HTMLDivElement>('div')
    ..className = 'crew-item-footer';

  final title = veb.newElem<web.HTMLParagraphElement>('p')
    ..innerText = crew.title;

  final btn = veb.newElem<web.HTMLButtonElement>('button')..innerText = '⋮';
  final optionDiv = newOptions(itemDiv: crewItemDiv, crew: crew);

  btn.onclick = (web.MouseEvent e) {
    optionDiv.classList.toggle('options-show');
  }.toJS;

  crewItemFooter
    ..appendChild(title)
    ..appendChild(btn)
    ..appendChild(optionDiv);

  web.document.addEventListener(
    'mouseup',
    (web.PointerEvent e) {
      final clickedElem = e.currentTarget as web.Element;
      final isDivVisible = optionDiv.classList.contains('options-show');

      if (isDivVisible &&
          !optionDiv.contains(clickedElem) &&
          clickedElem != btn) {
        optionDiv.classList.toggle('options-show');
      }
    }.toJS,
  );

  crewItemDiv
    ..appendChild(crewItemPics)
    ..appendChild(crewItemFooter);

  return crewItemDiv;
}

web.HTMLDivElement newOptions({
  required final web.HTMLDivElement itemDiv,
  required final ProfileCrew crew,
}) {
  final editBtn = veb.newElem<web.HTMLButtonElement>('button')
    ..innerText = 'Edit'
    ..onclick = () {
      // TODO: Change when in prod
      web.window.location.assign(
        '$frontendDomainWithProtocol/edit-crew/?id=${crew.id}',
      );
    }.toJS;

  final shareBtn = veb.newElem<web.HTMLButtonElement>('button')
    ..innerText = 'Share'
    ..onclick = () {
      // TODO: Change link when in prod
      web.window.navigator.clipboard.writeText(
        '$frontendDomainWithProtocol/crew?id=${crew.id}',
      );
    }.toJS;

  final deleteBtn = veb.newElem<web.HTMLButtonElement>('button')
    ..innerText = 'Delete'
    ..className = 'text-red'
    ..onclick = () {
      // TODO: Add a modal or confirmation for yes/no before proceeding
      _deleteCrew(crew, itemDiv);
    }.toJS;

  final div = web.document.createElement('div') as web.HTMLDivElement
    ..className = 'crew-item-options'
    ..append(editBtn)
    ..append(shareBtn)
    ..append(deleteBtn);

  return div;
}
