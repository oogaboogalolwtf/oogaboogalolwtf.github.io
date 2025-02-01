import 'dart:js_interop';
import 'dart:typed_data' show Uint8List;

import 'package:image/image.dart' as img;
import 'package:web/web.dart' as web;

const maxRadius = 50;

Uint8List? customCrop(final String fname, final Uint8List bytes) {
  final image = img.decodeNamedImage(fname, bytes);

  if (image == null) {
    return null;
  }

  final cropped = img.copyResizeCropSquare(
    image,
    size: maxRadius,
    interpolation: img.Interpolation.average,
  );

  return img.encodeJpg(cropped);
}

void loadPicDivImage(final web.HTMLDivElement picDiv) {
  final imgStrData = picDiv.getAttribute('data-pic') ?? '';
  final imgBytes = Uint8List.fromList(imgStrData.codeUnits);

  final picBlob = web.Blob(
    [imgBytes.buffer.toJS].toJS,
    web.BlobPropertyBag(type: 'image/jpeg'),
  );

  final picUrl = web.URL.createObjectURL(picBlob);
  picDiv.style.backgroundImage = 'url($picUrl)';
}
