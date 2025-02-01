/*
Veb = Better Web but with a V
This file is a utility meant to be imported by other files hence MUST be
written in a universal manner.
*/

import 'package:web/web.dart' as web;

enum HttpStatus {
  ok(200),
  created(201),
  accepted(202),
  noContent(204),
  movedPermanently(301),
  found(302),
  temporaryRedirect(307),
  permanentRedirect(308),
  badRequest(400),
  unauthorized(401),
  forbidden(403),
  notFound(404);

  const HttpStatus(this.code);
  final int code;
}

/// Same as [getElementById] with type casting to [T].
///
/// Note: [T] extends [HTMLElement?] and the null case is when the element may
/// not be present in the DOM.
T getElemById<T extends web.HTMLElement?>(final String id) {
  return web.document.getElementById(id) as T;
}

web.Storage get localStorage => web.window.localStorage;

/// Creates a new element and type casts it before returning.
/// May panic (not tested) if [T] is incompatible with
/// [createElement(elemName)]
T newElem<T extends web.HTMLElement>(final String elemName) {
  return web.document.createElement(elemName) as T;
}
