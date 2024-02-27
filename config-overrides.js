// config-overrides.js
const { override, addWebpackDevServer } = require('customize-cra');

module.exports = override(
  addWebpackDevServer(config => {
    config.setupMiddlewares = config.setupMiddlewares || config.before; // Update the deprecated options
    delete config.before; // Remove the deprecated option
    delete config.after; // Remove the deprecated option

    // Modify other webpack dev server configurations if needed
    if (config.hot && config.hot[0]) {
      config.hot[0].quiet = true; // Example modification
    }

    return config;
  })
);
