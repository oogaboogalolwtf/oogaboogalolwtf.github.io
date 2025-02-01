import 'dart:convert' show jsonDecode, jsonEncode;
import 'dart:js_interop';

import 'package:http/http.dart' as http;
import 'package:web/web.dart' as web;

import '../environment.dart';
import '../veb.dart' as veb;

import 'custom_errors.dart';
import 'custom_listeners.dart';
import 'img_stuff.dart';

final class Crew {
  const Crew({required this.title, required this.members});

  final String title;
  final List<CrewMember> members;
}

final class CrewMember {
  const CrewMember({
    required this.name,
    required this.role,
    required this.imageData,
  });

  final String name;
  final String role;
  final String? imageData;
}

Future<Crew?> getCrew(String id) async {
  final url = getReqUrl(
    backendDomain,
    '/fetch-crew',
    {'id': id},
  );

  final response = await http.get(url);
  if (response.statusCode != veb.HttpStatus.found.code) {
    return null;
  }

  final body = response.body;
  final map = jsonDecode(body) as Map<String, dynamic>;
  final rawMembers = (map['Members']! as List).cast<Map>();

  final members = rawMembers.map((map) {
    return CrewMember(
      name: map['Name']!,
      role: map['Role']!,
      imageData: map['ImageData'],
    );
  }).toList(growable: false);

  return Crew(
    title: map['Title']!,
    members: members,
  );
}

// NO TOKEN STUFF HAHA
Future<void> loadCrewContainer() async {
  final queries = Uri.base.queryParameters;
  final id = queries['id'];

  if (id == null) {
    throw MissingQueryParamError();
  }

  final crew = await getCrew(id);
  if (crew == null) {
    throw CrewContainerLoadingError();
  }

  // Dayum, this syntax is wacked!
  final crewTitle = veb.getElemById<web.HTMLInputElement>('crew-title');
  crewTitle
    ..disabled = false
    ..classList.add('show-border')
    ..value = crew.title;

  final crewContainer = veb.getElemById<web.HTMLDivElement>('crew-container');

  for (final member in crew.members) {
    final name = member.name;
    final role = member.role;
    final imgData = member.imageData;
    final relationDiv = newMemberContainer(name, role, imgData);
    crewContainer.appendChild(relationDiv);
  }
}

web.HTMLDivElement newMemberContainer([
  final String? name,
  final String? role,
  final String? imageDataStr,
]) {
  // Pic stuff which is a div to show images and then an inp to receive drag
  // and drops
  final picInp = veb.newElem<web.HTMLInputElement>('input')
    ..type = 'file'
    ..accept = 'image/jpeg,image/png,image/webp';

  final picDiv = veb.newElem<web.HTMLDivElement>('div')
    ..className = 'crew-item-pic'
    ..appendChild(picInp);

  if (imageDataStr != null) {
    picDiv.setAttribute('data-pic', imageDataStr);
    loadPicDivImage(picDiv);
  }

  addPicInsertListener(picDiv);

  // Text stuff includes name, role and the 'as' label which comes before role
  final nameInp = veb.newElem<web.HTMLInputElement>('input')
    ..name = 'name'
    ..size = 10
    ..type = 'text'
    ..value = name ?? ''
    ..className = 'crew-item-text-name';

  final label = veb.newElem<web.HTMLLabelElement>('label')
    ..htmlFor = 'role'
    ..innerText = 'as'
    ..className = 'role-label';

  final roleInp = veb.newElem<web.HTMLInputElement>('input')
    ..name = 'role'
    ..size = 10
    ..type = 'text'
    ..value = role ?? ''
    ..className = 'crew-item-text-role';

  final roleDiv = veb.newElem<web.HTMLInputElement>('div')
    ..appendChild(label)
    ..appendChild(roleInp);

  final textDiv = veb.newElem<web.HTMLDivElement>('div')
    ..className = 'crew-item-text'
    ..appendChild(nameInp)
    ..appendChild(roleDiv);

  // Delete button
  final delBtn = veb.newElem<web.HTMLButtonElement>('button')
    ..className = 'crew-item-delete-btn'
    ..innerHTML = '<svg fill="#ff0000" version="1.1" '
            'xmlns="http://www.w3.org/2000/svg" '
            'xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 485 485" '
            'xml:space="preserve"><g><rect x="67.224" width="350.535" '
            'height="71.81"></rect><path '
            'd="M417.776,92.829H67.237V485h350.537V92.829H417.776z M165.402,'
            '431.447h-28.362V146.383h28.362V431.447z M256.689,431.447    '
            'h-28.363V146.383h28.363V431.447z M347.97,431.447h-28.361V146'
            '.383h28.361V431.447z"></path></g></svg>'
        .toJS;

  // The div to encase everything
  final relationDiv = veb.newElem<web.HTMLDivElement>('div')
    ..className = 'crew-item'
    ..appendChild(picDiv)
    ..appendChild(textDiv)
    ..appendChild(delBtn);

  delBtn.onclick = () {
    relationDiv.remove();
  }.toJS;

  return relationDiv;
}

void uploadCrew() async {
  // Populate the members list by extracting the req data from the container
  final members = <Map<String, String?>>[];
  final crewItems = web.document.getElementsByClassName('crew-item');
  final crewLen = crewItems.length;

  for (int i = 0; i < crewLen; i++) {
    final memberData = <String, String?>{};
    final item = crewItems.item(i) as web.HTMLDivElement;

    final picDiv = item.firstElementChild as web.HTMLDivElement;
    final imgDataStr = picDiv.getAttribute('data-pic');
    memberData['ImageData'] = imgDataStr;

    final textDiv = item.children.item(1) as web.HTMLDivElement;

    final nameInp = textDiv.firstElementChild as web.HTMLInputElement;
    final name = nameInp.value;

    memberData['Name'] = name;

    final roleDiv = textDiv.lastElementChild as web.HTMLDivElement;
    final roleInp = roleDiv.lastElementChild as web.HTMLInputElement;
    final role = roleInp.value;
    memberData['Role'] = role;

    if (name == '' || role == '') {
      continue;
    }

    members.add(memberData);
  }

  // Get the title
  final titleInp = veb.getElemById<web.HTMLInputElement>('crew-title');
  final title = titleInp.value;

  // Get the CrewID
  final id = Uri.base.queryParameters['id']!;

  // Make the request
  final url = getReqUrl(backendDomain, '/update-crew');

  final jsonBody = jsonEncode(<String, Object>{
    'CrewID': id,
    'Members': members,
    'Title': title,
  });

  final response = await http.post(
    url,
    headers: {
      'Authorization': veb.localStorage.getItem('token')!,
      'Content-Type': 'application/json',
    },
    body: jsonBody,
  );

  if (response.statusCode != veb.HttpStatus.ok.code) {
    // show warning
    final warningDiv = veb.newElem<web.HTMLDivElement>('div')
      ..className = 'warning-container';

    final warningContent = veb.newElem<web.HTMLDivElement>('div')
      ..className = 'warning-content'
      ..innerText = '''Something went wrong!
      Check your internet connection or contact us.
      Error: ${response.statusCode} ${response.body}''';

    final dismissBtn = veb.newElem<web.HTMLButtonElement>('button')
      ..innerText = 'Dismiss'
      ..className = 'dismiss-btn'
      ..onclick = () {
        warningDiv.remove();
      }.toJS;

    warningContent.appendChild(dismissBtn);
    warningDiv.appendChild(warningContent);
    web.document.body!.appendChild(warningDiv);
  }
}
