const path = require('path');
const express = require('express');

module.exports = {
  app: function () {
    const app = express();
    console.log(process.env.NODE_ENV);
    const indexPath = path.join(__dirname, '../dist/index.html');
    const publicPath = express.static(path.join(__dirname, '../dist'));

    app.use('../dist', publicPath);
    
    app.get('/*', function (_, res) { 
    	res.sendFile(indexPath) 
    });

    return app
  }
}

