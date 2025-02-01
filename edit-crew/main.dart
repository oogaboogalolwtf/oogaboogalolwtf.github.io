import 'package:web/web.dart' as web;

import 'crew_stuff.dart';
import 'custom_errors.dart';
import 'custom_listeners.dart';

void main() async {
  addEventListeners();
  addReloadWarn();

  try {
    await loadCrewContainer();
  } on CrewContainerLoadingError {
    final crewTitle =
        web.document.getElementById('crew-title') as web.HTMLInputElement;
    crewTitle.value = 'Something is wrong...';

    final crewContainer =
        web.document.getElementById('crew-container') as web.HTMLDivElement;
    crewContainer.innerText =
        'Check the query params maybe? Query params is the ?id=123 stuff at the end of a URL';
  } on MissingQueryParamError {
    final crewTitle =
        web.document.getElementById('crew-title') as web.HTMLInputElement;
    crewTitle.value = 'Something is wrong...';

    final crewContainer =
        web.document.getElementById('crew-container') as web.HTMLDivElement;
    crewContainer.innerText =
        'Check the query params maybe? Query params is the ?id=123 stuff at the end of a URL';
  }
}
