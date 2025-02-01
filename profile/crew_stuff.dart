import 'dart:convert';
import 'dart:js_interop';

import 'package:http/http.dart' as http;

import '../environment.dart';
import '../veb.dart' show HttpStatus;

final class ProfileCrew {
  const ProfileCrew({
    required this.title,
    required this.id,
    required this.images,
  });

  final String title;
  final int id;
  final List<String?> images;
}

Future<List<ProfileCrew>> fetchProfileCrews(final String token) async {
  final url = getReqUrl(backendDomain, '/fetch-account');
  final response = await http.get(url, headers: {'Authorization': token});

  if (response.statusCode != HttpStatus.found.code) {
    // TODO
    return <ProfileCrew>[];
  } else if (response.body == '') {
    return [];
  }

  final rawCrews =
      (jsonDecode(response.body) as List).cast<Map<String, dynamic>>();

  final crew = rawCrews.map((rawCrew) {
    final crewID = rawCrew['CrewID'] as int;
    final images =
        (rawCrew['Images'] as JSArray<JSString?>).toDart.cast<String?>();
    final title = rawCrew['Name'] as String;

    return ProfileCrew(title: title, id: crewID, images: images);
  }).toList(growable: false);

  return crew;
}
