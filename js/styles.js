var allBannerStyles = [
  {
    mainBlankSrc: './images/blanks/template-03-main-banner.png',
    moduleBlankSrc: './images/blanks/template-03-module-banner.png',
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
    },
  },
  {
    mainBlankSrc: './images/blanks/template-03-main-banner.png',
    moduleBlankSrc: './images/blanks/template-03-module-banner.png',
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
    },
  },
];
