import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CustomerAppMainModule } from './CustomerApp/CustomerApp.Mainmodule';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(CustomerAppMainModule)
  .catch(err => console.error(err));
