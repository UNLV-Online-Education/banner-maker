var allBannerStyles = [
  // Style 0
  {
    mainBlankSrc: 'images/blanks/main-banner-template-01.png',
    moduleBlankSrc: 'images/blanks/template_01-module-banner.png',
    getMainBannerData: function (name, title) {
      var drawingCanvas = document.getElementById('drawingCanvas');
      var mainImageSource = document.getElementById('mainImageSource');
      drawingCanvas.width = mainImageSource.naturalWidth;
      drawingCanvas.height = mainImageSource.naturalHeight;
      var ctx = drawingCanvas.getContext('2d');
      ctx.drawImage(document.getElementById('mainImageSource'), 0, 0);
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
      ctx.fillText(title, 200, 200);
      // Make an IMG
      return drawingCanvas.toDataURL();
    },
    getModuleBannerData: function (name, moduleNumber) {
      var drawingCanvas = document.getElementById('drawingCanvas');
      var mainImageSource = document.getElementById('mainImageSource');
      drawingCanvas.width = mainImageSource.naturalWidth;
      drawingCanvas.height = mainImageSource.naturalHeight;
      var ctx = drawingCanvas.getContext('2d');
      ctx.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);

      ctx.drawImage(document.getElementById('moduleImageSource'), 0, 0);
      //   Module Number
      ctx.fillStyle = '#e31837';
      ctx.shadowColor = 'black';
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      ctx.shadowBlur = 0;
      ctx.font = 'bold 32pt Arial';
      ctx.fillText('module'.toUpperCase() + ' ' + moduleNumber, 140, 110);
      return drawingCanvas.toDataURL();
    },
  },
  // Style 1
  {
    mainBlankSrc: 'images/blanks/main-banner-template-02.png',
    moduleBlankSrc: 'images/blanks/template_02-module-banner.png',
    getMainBannerData: function (name, title) {
      var drawingCanvas = document.getElementById('drawingCanvas');
      var mainImageSource = document.getElementById('mainImageSource');
      drawingCanvas.width = mainImageSource.naturalWidth;
      drawingCanvas.height = mainImageSource.naturalHeight;
      var ctx = drawingCanvas.getContext('2d');
      ctx.drawImage(document.getElementById('mainImageSource'), 0, 0);
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
      ctx.fillText(title.toUpperCase(), 120, 145);
      // Make an IMG
      return drawingCanvas.toDataURL();
    },
    getModuleBannerData: function (name, moduleNumber) {
      var drawingCanvas = document.getElementById('drawingCanvas');
      var mainImageSource = document.getElementById('mainImageSource');
      drawingCanvas.width = mainImageSource.naturalWidth;
      drawingCanvas.height = mainImageSource.naturalHeight;
      var ctx = drawingCanvas.getContext('2d');
      ctx.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);

      ctx.drawImage(document.getElementById('moduleImageSource'), 0, 0);
      //   Module Number
      ctx.fillStyle = 'white';
      ctx.shadowColor = 'black';
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      ctx.shadowBlur = 5;
      ctx.font = 'bold 42pt Arial';
      ctx.fillText('module'.toUpperCase() + ' ' + moduleNumber, 280, 70);
      return drawingCanvas.toDataURL();
    },
  },
  // Style 2
  {
    mainBlankSrc: 'images/blanks/main-banner-template-03.png',
    moduleBlankSrc: 'images/blanks/template_03-module-banner.png',
    getMainBannerData: function (name, title) {
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
      return drawingCanvas.toDataURL();
    },
    getModuleBannerData: function (name, moduleNumber) {
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
      ctx.font = 'bold 52pt Arial Narrow';
      ctx.fillText(name, 25, 108);
      //   Module Number
      ctx.fillStyle = 'white';
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      ctx.shadowBlur = 0;
      ctx.font = '22pt "Arial Narrow"';
      ctx.fillText('module'.toUpperCase() + ' ' + moduleNumber, 360, 125);
      return drawingCanvas.toDataURL();
    },
  },
  // Style 3
  {
    mainBlankSrc: 'images/blanks/main-banner-template-04.png',
    moduleBlankSrc: 'images/blanks/template_04-module-banner.png',
    getMainBannerData: function (name, title) {
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
      ctx.fillText(name.toUpperCase(), 40, 174);
      //   Course Title
      ctx.fillStyle = 'white';
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      ctx.shadowBlur = 0;
      ctx.font = '26pt "Arial Narrow"';
      ctx.fillText(title.toUpperCase(), 40, 220);
      // Make an IMG
      return drawingCanvas.toDataURL();
    },
    getModuleBannerData: function (name, moduleNumber) {
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
      return drawingCanvas.toDataURL();
    },
  },
];
