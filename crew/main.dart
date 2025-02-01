import 'dart:js_interop';
import 'dart:typed_data';

import 'package:web/web.dart' as web;

import '../constants.dart';
import 'crew.dart';

void main() async {
  final queries = Uri.base.queryParameters;
  final id = queries['id'];

  final crewInfo =
      web.document.getElementById('crew-info') as web.HTMLDivElement;
  final crewTitle =
      web.document.getElementById('crew-title') as web.HTMLDivElement;

  if (id == null) {
    crewInfo.style.display = 'block';
    crewTitle.innerHTML =
        'You are missing query params :p (It is the <i>?id=123</i> stuff.)'
            .toJS;
    return;
  }

  final crew = await getCrew(id);

  if (crew == null) {
    crewInfo.innerText =
        'Maybe it didn\'t exist or maybe it has been deleted ¯\\_(ツ)_/¯';
    crewInfo.style.display = 'block';
    crewTitle.innerHTML = 'There is nothing here :p'.toJS;
    return;
  }

  crewTitle.innerText = crew.title;

  final crewContainer =
      web.document.getElementById('crew-container') as web.HTMLDivElement;

  for (final member in crew.members) {
    final name = member.name;
    final role = member.role;
    final imgData = member.imageData;

    if (name == '' || role == '') {
      continue;
    }

    final memberContainer = newMemberDiv(
      name: name,
      role: role,
      imgData: imgData,
    );
    crewContainer.appendChild(memberContainer);
  }
}

web.HTMLDivElement newMemberDiv({
  required String name,
  required String role,
  String? imgData,
}) {
  final picDiv = web.document.createElement('div') as web.HTMLDivElement;
  picDiv.classList.add('crew-item-pic');

  _loadPicDivImage(picDiv, imgData);

  final nameDiv = web.document.createElement('div') as web.HTMLDivElement;
  nameDiv.classList.add('crew-item-text-name');
  nameDiv.innerText = name;

  final roleDiv = web.document.createElement('div') as web.HTMLDivElement;
  roleDiv.classList.add('crew-item-text-role');
  roleDiv.innerText = 'as $role';

  final textDiv = web.document.createElement('div') as web.HTMLDivElement;
  textDiv.classList.add('crew-item-text');
  textDiv.appendChild(nameDiv);
  textDiv.appendChild(roleDiv);

  final memberDiv = web.document.createElement('div') as web.HTMLDivElement;
  memberDiv.classList.add('crew-item');
  memberDiv.appendChild(picDiv);
  memberDiv.appendChild(textDiv);

  return memberDiv;
}

void _loadPicDivImage(final web.HTMLDivElement picDiv, final String? imgData) {
  if (imgData == null) {
    picDiv.innerHTML = personSvgHtml.toJS;
    return;
  }

  final imgBytes = Uint8List.fromList(imgData.codeUnits);

  final picBlob = web.Blob(
    [imgBytes.buffer.toJS].toJS,
    web.BlobPropertyBag(type: 'image/jpeg'),
  );

  final picUrl = web.URL.createObjectURL(picBlob);
  picDiv.style.backgroundImage = 'url($picUrl)';
}
