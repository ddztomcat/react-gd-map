const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const projectConfig = require('./project-config.js');
const config = require('./webpack.dev.js');
const options = {
  contentBase: './dist',
  hot: true,
  host: 'localhost',
  open : true,
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(projectConfig.port, 'localhost', () => {
  console.log('dev server listening on  ' + `http://localhost:${projectConfig.port}`);
});