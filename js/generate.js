window.onload = init;

var mainBlankLoaded = false;
var moduleBlankLoaded = false;
var firstTimeLoading = true;

var currentStyle = allBannerStyles[4];

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
}

function toggleLoadingSpinner() {
  document.getElementById('previewButton').classList.toggle('is-loading');
  document.getElementById('previewsLoading').classList.toggle('is-hidden');
}

function enableAndAlertTheDownloadButton() {
  document.getElementById('downloadButton').classList.toggle('is-loading');

  window.setTimeout(function () {
    document.getElementById('downloadButton').scrollIntoView();
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
