import 'dart:convert' show jsonDecode;

import 'package:http/http.dart' as http;

import '../environment.dart';
import '../veb.dart' show HttpStatus;

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

  if (response.statusCode != HttpStatus.found.code) {
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
