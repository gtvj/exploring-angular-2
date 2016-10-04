//  Import the platform-browser-dynamic (There are several different platforms
//  for Angular 2 applications - including platformBrowser, platformServer, platformWebworker
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Import our Module
import { AppModule } from './app.module';

// Instantiate a platform
const platform = platformBrowserDynamic();

// Bootstrap our Module
platform.bootstrapModule(AppModule);
