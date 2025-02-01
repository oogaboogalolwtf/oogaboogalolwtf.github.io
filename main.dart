import 'dart:js_interop' show FunctionToJSExportedDartFunction;

import 'package:web/web.dart' as web;

import 'veb.dart' as veb;

void main() {
  final hamMenu = veb.getElemById<web.HTMLDivElement>('ham-menu');
  final hammedNav = veb.getElemById<web.HTMLUListElement>('hammed-nav');

  hamMenu.addEventListener(
    'click',
    () {
      hamMenu.classList.toggle('active');
      hammedNav.classList.toggle('active');
    }.toJS,
  );
}
