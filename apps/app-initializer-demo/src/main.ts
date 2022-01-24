import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => 
  {
  console.error(err)
  const errorElement = document.querySelector('#myElement');
  if(errorElement)
  {
    errorElement.textContent="App Initialization Failed! Coming From main.ts file when promise from APP_INITIALIZER fails";
  }
  }

  );
