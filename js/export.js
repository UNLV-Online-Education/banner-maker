function exportZip() {
  var mainImage = document.getElementById('mainImageDestination');
  var zip = new JSZip();
  zip.file('course-banner.png', dataURLtoBlob(mainImage.src), { base64: true });
  for (var moduleNumber = 1; moduleNumber < 16; moduleNumber++) {
    var currentName = 'module-' + moduleNumber + '-banner';
    let currentImage = document.getElementById(
      'module-' + moduleNumber + '-banner'
    );
    zip.file(currentName + '.png', dataURLtoBlob(currentImage.src), {
      base64: true,
    });
  }
  zip.generateAsync({ type: 'blob' }).then(function (content) {
    saveAs(content, 'UNLV-Course-Banners.zip');
  });
}

function dataURLtoBlob(dataurl) {
  var arr = dataurl.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
}
