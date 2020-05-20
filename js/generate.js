window.onload = initializeImages;

var mainBlankLoaded = false;
var moduleBlankLoaded = false;

var currentStyle = allBannerStyles[0];

function generateBanners() {
  clearOldPreviews();

  var name = document.getElementById('courseName').value.toLocaleUpperCase();
  var title = document.getElementById('courseTitle').value.toLocaleUpperCase();

  var mainBannerData = currentStyle.getMainBannerData(name, title);
  var imgElement = new Image();
  imgElement.id = 'mainImageDestination';
  imgElement.src = mainBannerData;
  imgElement.alt = name + ' ' + title;
  imgElement.classList.add('generated');
  var previewZone = document.getElementById('previewZone');
  previewZone.appendChild(imgElement);
  for (var moduleNumber = 1; moduleNumber < 16; moduleNumber++) {
    let newImage = document.createElement('img');
    newImage.id = 'module-' + moduleNumber + '-banner';
    newImage.classList.add('generated');
    if (moduleNumber > 1) {
      newImage.classList.toggle('is-hidden');
    }
    newImage.src = currentStyle.getModuleBannerData(name, moduleNumber);
    previewZone.appendChild(newImage);
  }
  donePreviewLoading();
}

function processForm(e) {
  if (e.preventDefault) e.preventDefault();
  /* do what you want with the form */
  toggleLoadingSpinner();
  generateBanners();

  // You must return false to prevent the default form behavior
  return false;
}

function initializeImages() {
  mainBlankLoaded = false;
  moduleBlankLoaded = false;

  //activate loading image
  toggleLoadingSpinner();

  var drawingCanvas = document.createElement('canvas');
  drawingCanvas.id = 'drawingCanvas';
  drawingCanvas.classList.add('is-hidden');
  document.body.appendChild(drawingCanvas);
  // Set Source Images
  var mainImageSource = new Image();
  mainImageSource.id = 'mainImageSource';
  mainImageSource.classList.add('is-hidden');
  mainImageSource.onload = function () {
    mainBlankLoaded = true;
    if (moduleBlankLoaded) {
      generateBanners();
    }
  };
  document.body.appendChild(mainImageSource);
  mainImageSource.src = currentStyle.mainBlankSrc;
  // Module Image Source
  var moduleImageSource = new Image();
  moduleImageSource.id = 'moduleImageSource';
  moduleImageSource.classList.add('is-hidden');
  moduleImageSource.onload = function () {
    moduleBlankLoaded = true;
    if (mainBlankLoaded) {
      generateBanners();
    }
  };
  document.body.appendChild(moduleImageSource);
  moduleImageSource.src = currentStyle.moduleBlankSrc;
  var form = document.getElementById('my-form');
  if (form.attachEvent) {
    form.attachEvent('submit', processForm);
  } else {
    form.addEventListener('submit', processForm);
  }
}

function clearOldPreviews() {
  var mainImage = document.getElementById('mainImageDestination');
  if (mainImage) {
    mainImage.parentNode.removeChild(mainImage);
  }
  for (var index = 1; index <= 16; index++) {
    var currentItem = document.getElementById('module-' + index + '-banner');
    if (currentItem) {
      currentItem.parentElement.removeChild(currentItem);
    }
  }
}

function donePreviewLoading() {
  toggleLoadingSpinner();
  var downloadButton = document.getElementById('downloadButton');
  if (downloadButton.getAttribute('disabled')) {
    downloadButton.attributes.removeNamedItem('disabled');
  }
}

function toggleLoadingSpinner() {
  document.getElementById('previewButton').classList.toggle('is-loading');
  document.getElementById('previewsLoading').classList.toggle('is-hidden');
}
