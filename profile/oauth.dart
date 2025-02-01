import 'dart:math';

import 'package:http/http.dart' as http;
import 'package:web/web.dart' as web;

import '../environment.dart';
import '../veb.dart' as veb;

const stateStrLen = 128;

String generateRandomString(int len) {
  var r = Random.secure();
  const chars =
      'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890';
  return List.generate(len, (_) => chars[r.nextInt(chars.length)]).join();
}

Future<void> startOAuth() async {
  String? state = veb.localStorage.getItem('state');

  if (state == null) {
    // Create a state and redirect to there
    state = generateRandomString(stateStrLen);
    veb.localStorage.setItem('state', state);
    web.window.location.replace(
      '$backendDomainWithProtocol/oauth?state=$state',
    );
  } else {
    final url = getReqUrl(
      backendDomain,
      '/get-token',
      <String, String>{'state': state},
    );

    final response = await http.get(url);
    if (response.statusCode == veb.HttpStatus.found.code) {
      veb.localStorage.setItem('token', response.body);
      veb.localStorage.removeItem('state');
    } else {
      state = generateRandomString(stateStrLen);
      veb.localStorage.setItem('state', state);

      // Redo the OAuth
      web.window.location.replace(
        '$backendDomainWithProtocol/oauth?state=$state',
      );
    }
  }
}
