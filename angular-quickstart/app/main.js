"use strict";
//  Import the platform-browser-dynamic (There are several different platforms
//  for Angular 2 applications - including platformBrowser, platformServer, platformWebworker
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
// Import our Module
var app_module_1 = require('./app.module');
// Instantiate a platform
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
// Bootstrap our Module
platform.bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map