window.onload = initialize;
function generateBanners() {
  startPreviewLoading();
  clearOldPreviews();

  var name = document.getElementById('courseName');
  name = name.value ? name.value.toLocaleUpperCase() : 'ABC 123';
  var title = document.getElementById('courseTitle');
  title = title.value
    ? title.value.toLocaleUpperCase()
    : 'COURSE NAME GOES HERE';
  var mainBannerData = getMainBannerData(name, title);
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
    newImage.src = getModuleBannerData(name, moduleNumber);
    previewZone.appendChild(newImage);
  }
  donePreviewLoading();
  document.getElementById('previewZone').scrollIntoView(true);
}

function getModuleBannerData(name, moduleNumber) {
  drawingCanvas.width = 1100;
  drawingCanvas.height = 150;
  var ctx = drawingCanvas.getContext('2d');
  ctx.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);

  ctx.drawImage(document.getElementById('moduleImageSource'), 0, 0);
  //   Course Number
  ctx.fillStyle = 'white';
  ctx.shadowColor = 'black';
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.shadowBlur = 5;
  ctx.font = '52pt Arial Narrow';
  ctx.fillText(name, 25, 108);
  //   Module Number
  ctx.fillStyle = 'white';
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.shadowBlur = 0;
  ctx.font = '22pt "Arial Narrow"';
  ctx.fillText('module'.toUpperCase() + ' ' + moduleNumber, 360, 125);
  return drawingCanvas.toDataURL();
}

function getMainBannerData(name, title) {
  var drawingCanvas = document.getElementById('drawingCanvas');
  drawingCanvas.width = 1100;
  drawingCanvas.height = 300;
  var ctx = drawingCanvas.getContext('2d');
  ctx.drawImage(document.getElementById('mainImageSource'), 0, 0);
  //   Course Number
  ctx.fillStyle = 'white';
  ctx.shadowColor = 'black';
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.shadowBlur = 5;
  ctx.font = '80pt Arial Narrow';
  ctx.fillText(name, 40, 174);
  //   Course Title
  ctx.fillStyle = 'lightgray';
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.shadowBlur = 0;
  ctx.font = '26pt "Arial Narrow"';
  ctx.fillText(title, 40, 234, 450);
  // Make an IMG
  return drawingCanvas.toDataURL();
}

function processForm(e) {
  if (e.preventDefault) e.preventDefault();

  /* do what you want with the form */
  generateBanners();

  // You must return false to prevent the default form behavior
  return false;
}
function initialize() {
  var drawingCanvas = document.createElement('canvas');
  drawingCanvas.id = 'drawingCanvas';
  drawingCanvas.classList.add('is-hidden');
  document.body.appendChild(drawingCanvas);
  // Set Source Images
  var mainImageSource = new Image();
  mainImageSource.id = 'mainImageSource';
  mainImageSource.classList.add('is-hidden');
  document.body.appendChild(mainImageSource);
  mainImageSource.src = 'blanks/template-03-main-banner.png';
  // Module Image Source
  var moduleImageSource = new Image();
  moduleImageSource.id = 'moduleImageSource';
  moduleImageSource.classList.add('is-hidden');
  document.body.appendChild(moduleImageSource);
  moduleImageSource.src = 'blanks/template-03-module-banner.png';
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

function startPreviewLoading() {
  var loadingImage = document.getElementById('previewsLoading');
  loadingImage.classList.remove('is-hidden');
  var header = document.getElementById('previewHeader');
  header.classList.remove('has-text-grey');
}
function donePreviewLoading() {
  var loadingImage = document.getElementById('previewsLoading');
  loadingImage.classList.add('is-hidden');
  var header = document.getElementById('downloadHeader');
  header.classList.remove('has-text-grey');
  var downloadButton = document.getElementById('downloadButton');
  downloadButton.classList.remove('is-hidden');
}
