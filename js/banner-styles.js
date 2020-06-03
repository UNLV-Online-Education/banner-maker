var allBannerStyles = [
  // Style 0
  {
    mainBlankSrc: 'images/blanks/main-banner-template-01.png',
    moduleBlankSrc: 'images/blanks/template_01-module-banner.png',
    getMainBannerData: function (name, title) {
      var ctx = prepareCanvas('mainImageSource');
      //   Course Number
      ctx.fillStyle = '#e31837';
      ctx.shadowColor = 'black';
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      ctx.shadowBlur = 0;
      ctx.font = 'bold 50pt Arial Narrow';
      ctx.fillText(name, 200, 160);
      //   Course Title
      ctx.fillStyle = 'black';
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      ctx.shadowBlur = 0;
      ctx.font = '24pt "Arial"';

      // split title if too long
      if (title.length <= 30) {
        ctx.fillText(title, 200, 200);
      } else if (title.length > 30 && title.length < 60) {
        var newTitle = stringDivider(title, 30, '\n').split('\n');
        ctx.fillText(newTitle[0].trim(), 200, 200);
        ctx.fillText(newTitle[1].trim(), 200, 250);
      } else {
        var newTitle = stringDivider(
          title,
          Math.floor(title.length / 2),
          '\n'
        ).split('\n');
        ctx.fillText(newTitle[0], 200, 200, 420);
        ctx.fillText(newTitle[1], 200, 240, 420);
      }

      // Make an IMG
      return getCanvas().toDataURL();
    },
    getModuleBannerData: function (name, moduleNumber) {
      var ctx = prepareCanvas('moduleImageSource');
      //   Module Number
      ctx.fillStyle = '#e31837';
      ctx.shadowColor = 'black';
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      ctx.shadowBlur = 0;
      ctx.font = 'bold 32pt Arial';
      ctx.fillText('module'.toUpperCase() + ' ' + moduleNumber, 140, 110);
      return getCanvas().toDataURL();
    },
  },
  // Style 1
  {
    mainBlankSrc: 'images/blanks/main-banner-template-02.png',
    moduleBlankSrc: 'images/blanks/template_02-module-banner.png',
    getMainBannerData: function (name, title) {
      var ctx = prepareCanvas('mainImageSource');
      //   Course Number
      ctx.fillStyle = 'white';
      ctx.shadowColor = 'black';
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      ctx.shadowBlur = 5;
      ctx.font = 'bold 60pt Arial';
      ctx.fillText(name, 140, 95);
      //   Course Title
      ctx.fillStyle = '#666';
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      ctx.shadowBlur = 0;
      ctx.font = '26pt "Arial Narrow"';
      // split title if too long
      if (title.length <= 30) {
        ctx.fillText(title.toUpperCase(), 120, 145);
      } else if (title.length > 33 && title.length < 66) {
        var newTitle = stringDivider(title, 30, '\n').split('\n');
        ctx.fillStyle = '#e5e5e5';
        ctx.fillRect(75, 154, 645, 200);
        ctx.fillStyle = '#666';
        ctx.fillText(newTitle[0].trim().toUpperCase(), 120, 145);
        ctx.fillText(newTitle[1].trim().toUpperCase(), 120, 185);
      } else {
        var newTitle = stringDivider(
          title,
          Math.floor(title.length / 2),
          '\n'
        ).split('\n');
        ctx.fillStyle = '#e5e5e5';
        ctx.fillRect(76, 154, 644, 200);
        ctx.fillStyle = '#666';
        ctx.fillText(newTitle[0].trim().toUpperCase(), 120, 145, 540);
        ctx.fillText(newTitle[1].trim().toUpperCase(), 120, 185, 540);
      }

      // Make an IMG
      return getCanvas().toDataURL();
    },
    getModuleBannerData: function (name, moduleNumber) {
      var ctx = prepareCanvas('moduleImageSource');

      //   Module Number
      ctx.fillStyle = 'white';
      ctx.shadowColor = 'black';
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      ctx.shadowBlur = 5;
      ctx.font = 'bold 42pt Arial';
      ctx.fillText('module'.toUpperCase() + ' ' + moduleNumber, 280, 70);
      return getCanvas().toDataURL();
    },
  },
  // Style 2
  {
    mainBlankSrc: 'images/blanks/main-banner-template-03.png',
    moduleBlankSrc: 'images/blanks/template_03-module-banner.png',
    getMainBannerData: function (name, title) {
      var ctx = prepareCanvas('mainImageSource');
      //   Course Number
      ctx.fillStyle = 'white';
      ctx.shadowColor = 'black';
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      ctx.shadowBlur = 5;
      ctx.font = 'bold 80pt Arial Narrow';
      ctx.fillText(name.toUpperCase(), 40, 174);
      //   Course Title
      ctx.fillStyle = 'lightgray';
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      ctx.shadowBlur = 0;
      ctx.font = '26pt "Arial Narrow"';
      ctx.fillText(title.toUpperCase(), 40, 234, 450);
      // Make an IMG
      return getCanvas().toDataURL();
    },
    getModuleBannerData: function (name, moduleNumber) {
      var ctx = prepareCanvas('moduleImageSource');
      //   Course Number
      ctx.fillStyle = 'white';
      ctx.shadowColor = 'black';
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      ctx.shadowBlur = 5;
      ctx.font = 'bold 52pt Arial Narrow';
      ctx.fillText(name, 25, 108);
      //   Module Number
      ctx.fillStyle = 'white';
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      ctx.shadowBlur = 0;
      ctx.font = '22pt "Arial Narrow"';
      ctx.fillText('module'.toUpperCase() + ' ' + moduleNumber, 360, 125);
      return getCanvas().toDataURL();
    },
  },
  // Style 3
  {
    mainBlankSrc: 'images/blanks/main-banner-template-04.png',
    moduleBlankSrc: 'images/blanks/template_04-module-banner.png',
    getMainBannerData: function (name, title) {
      var ctx = prepareCanvas('mainImageSource');
      //   Course Number
      ctx.fillStyle = 'white';
      ctx.shadowColor = 'black';
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      ctx.shadowBlur = 5;
      ctx.font = '80pt Arial Narrow';
      ctx.fillText(name.toUpperCase(), 40, 174);
      //   Course Title
      ctx.fillStyle = 'white';
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      ctx.shadowBlur = 0;
      ctx.font = '26pt "Arial Narrow"';
      ctx.fillText(title.toUpperCase(), 40, 220);
      // Make an IMG
      return getCanvas().toDataURL();
    },
    getModuleBannerData: function (name, moduleNumber) {
      var ctx = prepareCanvas('moduleImageSource');

      //   Course Number
      ctx.fillStyle = 'white';
      ctx.shadowColor = 'black';
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      ctx.shadowBlur = 0;
      ctx.font = '48pt Arial Narrow';
      ctx.fillText(name, 20, 125);
      //   Module Number
      ctx.fillStyle = 'lightgrey';
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      ctx.shadowBlur = 0;
      ctx.font = '32pt "Arial Narrow"';
      ctx.fillText('module'.toUpperCase() + ' ' + moduleNumber, 425, 120);
      return getCanvas().toDataURL();
    },
  },
  // Style 4
  {
    mainBlankSrc: 'images/blanks/main-banner-template-05.png',
    moduleBlankSrc: 'images/blanks/template_05-module-banner.png',
    getMainBannerData: function (name, title) {
      var ctx = prepareCanvas('mainImageSource');

      //   Course Number
      ctx.fillStyle = 'black';
      ctx.shadowColor = 'black';
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      ctx.shadowBlur = 0;
      ctx.font = '48pt Roboto';
      ctx.fillText(name.toUpperCase(), 20, 65);
      //   Course Title
      ctx.fillStyle = 'black';
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      ctx.shadowBlur = 0;
      ctx.font = '18pt "Roboto"';
      ctx.fillText(title, 20, 100);
      // Make an IMG
      return getCanvas().toDataURL();
    },
    getModuleBannerData: function (name, moduleNumber) {
      var ctx = prepareCanvas('moduleImageSource');
      //   Module Number
      ctx.fillStyle = 'black';
      ctx.shadowColor = 'black';
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      ctx.shadowBlur = 0;
      ctx.font = '48pt Roboto';
      ctx.fillText('module'.toUpperCase() + ' ' + moduleNumber, 20, 75);
      return getCanvas().toDataURL();
    },
  },
  // Style 5
  {
    mainBlankSrc: 'images/blanks/main-banner-template-06.png',
    moduleBlankSrc: 'images/blanks/template_06-module-banner.png',
    getMainBannerData: function (name, title) {
      var ctx = prepareCanvas('mainImageSource');

      //   Course Number
      ctx.fillStyle = 'white';
      ctx.shadowColor = 'red';
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      ctx.shadowBlur = 1;
      ctx.font = '120pt Roboto';
      ctx.fillText(name.toUpperCase(), 220, 200);
      //   Course Title
      ctx.fillStyle = 'white';
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      ctx.shadowBlur = 1;
      ctx.font = '30pt "Roboto"';
      ctx.fillText(title, 60, 285);
      // Make an IMG
      return getCanvas().toDataURL();
    },
    getModuleBannerData: function (name, moduleNumber) {
      var ctx = prepareCanvas('moduleImageSource');

      //   Course Number
      ctx.fillStyle = 'white';
      ctx.shadowColor = 'red';
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      ctx.shadowBlur = 1;
      ctx.font = '42pt Roboto';
      ctx.fillText(name.split(' ')[0].toUpperCase(), 40, 70);
      ctx.font = '48pt Roboto';
      ctx.fillText(name.split(' ')[1].toUpperCase(), 40, 140);
      //   Module Number
      ctx.fillStyle = 'white';
      ctx.shadowColor = 'red';
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      ctx.shadowBlur = 0;
      ctx.font = '36pt Roboto';
      ctx.fillText('module'.toUpperCase() + ' ' + moduleNumber, 380, 100);
      return getCanvas().toDataURL();
    },
  },
  // Style 6
  {
    mainBlankSrc: 'images/blanks/main-banner-template-07.png',
    moduleBlankSrc: 'images/blanks/template_07-module-banner.png',
    getMainBannerData: function (name, title) {
      var ctx = prepareCanvas('mainImageSource');

      //   Course Number
      ctx.fillStyle = 'white';
      ctx.shadowColor = 'black';
      ctx.shadowOffsetX = 1;
      ctx.shadowOffsetY = 1;
      ctx.shadowBlur = 2;
      ctx.font = 'bold 56pt Verdana';
      ctx.fillText(name.toUpperCase(), 20, 125);
      //   Course Title
      ctx.fillStyle = 'white';
      ctx.shadowOffsetX = 1;
      ctx.shadowOffsetY = 1;
      ctx.shadowBlur = 1;
      ctx.font = '20pt "Verdana"';
      ctx.fillText(title, 20, 165);
      // Make an IMG
      return getCanvas().toDataURL();
    },
    getModuleBannerData: function (name, moduleNumber) {
      var ctx = prepareCanvas('moduleImageSource');

      //   Module Number
      ctx.fillStyle = 'white';
      ctx.shadowColor = 'black';
      ctx.shadowOffsetX = 1;
      ctx.shadowOffsetY = 0;
      ctx.shadowBlur = 2;
      ctx.font = 'bold 48pt Verdana';
      ctx.fillText('module'.toUpperCase() + ' ' + moduleNumber, 100, 115);
      return getCanvas().toDataURL();
    },
  },
  // Style 7
  {
    mainBlankSrc: 'images/blanks/main-banner-template-08.png',
    moduleBlankSrc: 'images/blanks/template_08-module-banner.png',
    getMainBannerData: function (name, title) {
      var ctx = prepareCanvas('mainImageSource');

      //   Course Number
      ctx.fillStyle = 'white';
      ctx.shadowColor = 'black';
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      ctx.shadowBlur = 0;
      ctx.font = 'bold 64pt Roboto';
      ctx.fillText(name.toUpperCase(), 20, 120);
      //   Course Title
      ctx.fillStyle = 'white';
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      ctx.shadowBlur = 1;
      ctx.font = '24pt "Roboto"';
      ctx.fillText(title, 20, 170);
      // Make an IMG
      return getCanvas().toDataURL();
    },
    getModuleBannerData: function (name, moduleNumber) {
      var ctx = prepareCanvas('moduleImageSource');

      //   Module Number
      ctx.fillStyle = 'white';
      ctx.shadowColor = 'black';
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      ctx.shadowBlur = 0;
      ctx.font = '28pt Roboto';
      ctx.fillText('module'.toUpperCase() + ' ' + moduleNumber, 12, 110);
      return getCanvas().toDataURL();
    },
  },
];

function getCanvas() {
  return document.getElementById('drawingCanvas');
}
function prepareCanvas(sourceName) {
  var drawingCanvas = getCanvas();
  var mainImageSource = document.getElementById(sourceName);
  drawingCanvas.width = mainImageSource.naturalWidth;
  drawingCanvas.height = mainImageSource.naturalHeight;
  var ctx = drawingCanvas.getContext('2d');
  ctx.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);
  ctx.drawImage(document.getElementById(sourceName), 0, 0);
  return ctx;
}

function stringDivider(str, width, spaceReplacer) {
  if (str.length > width) {
    var p = width;
    for (; p > 0 && str[p] != ' '; p--) {}
    if (p > 0) {
      var left = str.substring(0, p);
      var right = str.substring(p + 1);
      return left + spaceReplacer + right;
      // return left + spaceReplacer + stringDivider(right, width, spaceReplacer);
    }
  }
  return str;
}
