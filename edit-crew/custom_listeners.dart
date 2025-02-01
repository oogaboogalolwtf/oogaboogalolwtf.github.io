import 'dart:js_interop';

import 'package:web/web.dart' as web;

import 'crew_stuff.dart';
import 'img_stuff.dart';

void addEventListeners() {
  final addMmbrBtn =
      web.document.getElementById('add-member') as web.HTMLButtonElement;
  final saveShareBtn =
      web.document.getElementById('save-and-share') as web.HTMLButtonElement;

  addMmbrBtn.addEventListener(
    'click',
    () {
      final crewContainer =
          web.document.getElementById('crew-container') as web.HTMLDivElement;
      final blankCrewEntry = newMemberContainer();

      crewContainer.appendChild(blankCrewEntry);
    }.toJS,
  );

  saveShareBtn.addEventListener(
    'click',
    () {
      uploadCrew();
      // TODO: share part
    }.toJS,
  );
}

void addPicInsertListener(web.HTMLDivElement picDiv) {
  // Prevents the browser from just getting rid of the page and showing the
  // file instead
  picDiv.addEventListener(
    'dragover',
    (web.Event event) {
      event.preventDefault();
    }.toJS,
  );

  // actual listener
  picDiv.addEventListener(
    'drop',
    (web.DragEvent event) {
      // I have no idea what this does but this was suggested on MDN
      event.preventDefault();

      final picInp = picDiv.firstElementChild! as web.HTMLInputElement;
      picInp.files = event.dataTransfer!.files;

      picDiv.onchange!.callAsFunction();
    }.toJS,
  );

  // when image is ready listener
  picDiv.onchange = () {
    displayAndStoreDivImage(picDiv);
  }.toJS;
}

Future<void> displayAndStoreDivImage(web.HTMLDivElement picDiv) async {
  // Get the file from picInp
  final picInp = picDiv.firstElementChild! as web.HTMLInputElement;
  if (picInp.value == '') return;

  final file = picInp.files?.item(0);
  if (file == null) return;

  // Resize the image and get as Uint8List
  final jsBuffer = await file.arrayBuffer().toDart;
  final bytes = jsBuffer.toDart.asUint8List();
  final imgBytes = customCrop(file.name, bytes);
  if (imgBytes == null) return;

  // Convert the pic bytes as string for easier access
  final imgStrData = String.fromCharCodes(imgBytes);
  picDiv.setAttribute('data-pic', imgStrData);

  // Load the pic from the data stored as element's attribute
  loadPicDivImage(picDiv);
}

void addReloadWarn() {
  web.window.onbeforeunload = () {
    return web.window
        .confirm('Reloading will lose all the unsaved data. Are you sure?');
  }.toJS;
}
