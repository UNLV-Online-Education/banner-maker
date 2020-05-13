window.onload = generateBanners;
function generateBanners() {
  var name = document.getElementById('courseName');
  name = name.value ? name.value.toLocaleUpperCase() : 'ABC 123';
  var title = document.getElementById('courseTitle');
  title = title.value
    ? title.value.toLocaleUpperCase()
    : 'COURSE NAME GOES HERE';
  var mainBannerData = getMainBannerData(name, title);

  var imgElement = document.getElementById('mainImageDestination');
  imgElement.src = mainBannerData;
  imgElement.alt = name + ' ' + title;
  imgElement.classList.remove('is-hidden');

  // remove previously generated banners
  var finishedBannerSection = document.getElementById('moduleBanners');
  finishedBannerSection.innerHTML = '';
  for (var moduleNumber = 1; moduleNumber < 16; moduleNumber++) {
    let newImage = document.createElement('img');
    newImage.src = getModuleBannerData(name, moduleNumber);
    finishedBannerSection.appendChild(newImage);
  }
}

function getModuleBannerData(name, moduleNumber) {
  var moduleBanner = document.getElementById('moduleBanner');
  var ctx = moduleBanner.getContext('2d');
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
  return moduleBanner.toDataURL();
}

function getMainBannerData(name, title) {
  var mainBanner = document.getElementById('mainBanner');
  var ctx = mainBanner.getContext('2d');
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
  return mainBanner.toDataURL();
}

function processForm(e) {
  if (e.preventDefault) e.preventDefault();

  /* do what you want with the form */
  generateBanners();

  // You must return false to prevent the default form behavior
  return false;
}

var form = document.getElementById('my-form');
if (form.attachEvent) {
  form.attachEvent('submit', processForm);
} else {
  form.addEventListener('submit', processForm);
}
