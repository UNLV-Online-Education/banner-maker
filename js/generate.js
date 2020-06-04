window.onload = init;

var mainBlankLoaded = false;
var moduleBlankLoaded = false;
var firstTimeLoading = true;

var currentStyle = allBannerStyles[0];

function init() {
  var form = document.getElementById('my-form');
  if (form.attachEvent) {
    form.attachEvent('submit', processForm);
  } else {
    form.addEventListener('submit', processForm);
  }

  initializeImages();
}

function initializeImages() {
  mainBlankLoaded = false;
  moduleBlankLoaded = false;

  //activate loading image
  toggleLoadingSpinner();

  // Set Main Image Source
  var mainImageSource = document.getElementById('mainImageSource');
  mainImageSource.onload = function () {
    mainBlankLoaded = true;
    if (moduleBlankLoaded) {
      generateBanners();
    }
  };
  mainImageSource.src = currentStyle.mainBlankSrc;

  // Set Module Image Source
  var moduleImageSource = document.getElementById('moduleImageSource');
  moduleImageSource.onload = function () {
    moduleBlankLoaded = true;
    if (mainBlankLoaded) {
      generateBanners();
    }
  };
  moduleImageSource.src = currentStyle.moduleBlankSrc;
}

function generateBanners() {
  clearOldPreviews();

  var name = document.getElementById('courseName').value;
  var title = document.getElementById('courseTitle').value;

  var mainBannerData = currentStyle.getMainBannerData(name, title);
  var mainFigure = document.createElement('figure');
  mainFigure.classList.add('image');
  mainFigure.classList.add('box');
  var imgElement = new Image();
  imgElement.id = 'mainImageDestination';
  imgElement.src = mainBannerData;
  imgElement.alt = name + ' ' + title;
  imgElement.classList.add('generated');
  var previewZone = document.getElementById('previewZone');
  mainFigure.appendChild(document.createTextNode('Course Banner'));
  mainFigure.appendChild(imgElement);
  previewZone.appendChild(mainFigure);
  for (var moduleNumber = 1; moduleNumber < 16; moduleNumber++) {
    var bannerFigure = document.createElement('figure');
    bannerFigure.classList.add('image');
    bannerFigure.classList.add('box');
    let newImage = document.createElement('img');

    newImage.id = 'module-' + moduleNumber + '-banner';
    newImage.classList.add('generated');
    if (moduleNumber > 1) {
      newImage.classList.toggle('is-hidden');
      bannerFigure.classList.toggle('is-hidden');
    }
    newImage.src = currentStyle.getModuleBannerData(name, moduleNumber);
    bannerFigure.appendChild(document.createTextNode('Module Banner'));
    bannerFigure.appendChild(newImage);
    previewZone.appendChild(bannerFigure);
  }
  donePreviewLoading();
  if (!firstTimeLoading) {
    enableAndAlertTheDownloadButton();
  }
  firstTimeLoading = false;
}

function processForm(e) {
  if (e.preventDefault) e.preventDefault();
  /* do what you want with the form */
  toggleLoadingSpinner();
  generateBanners();

  // You must return false to prevent the default form behavior
  return false;
}

function chooseStyle(styleIndex) {
  currentStyle = allBannerStyles[styleIndex];
  toggleModal();
  initializeImages();
}

function clearOldPreviews() {
  var allFigures = document
    .getElementById('previewZone')
    .getElementsByTagName('figure');
  for (var i = allFigures.length - 1; i >= 0; i--) {
    allFigures[i].parentNode.removeChild(allFigures[i]);
  }
}

function donePreviewLoading() {
  toggleLoadingSpinner();
}

function toggleLoadingSpinner() {
  document.getElementById('previewButton').classList.toggle('is-loading');
  document.getElementById('previewsLoading').classList.toggle('is-hidden');
}

function enableAndAlertTheDownloadButton() {
  document.getElementById('downloadButton').classList.toggle('is-loading');

  window.setTimeout(function () {
    // document.getElementById('previewHeader').scrollIntoView();
    // document.getElementById('downloadButton').scrollIntoView();
    window.setTimeout(function () {
      var downloadButton = document.getElementById('downloadButton');
      if (downloadButton.getAttribute('disabled')) {
        downloadButton.attributes.removeNamedItem('disabled');
      }
      downloadButton.classList.toggle('is-loading');
      downloadButton.attributes.removeNamedItem('disabled');
    }, 1000);
  }, 1000);
}
