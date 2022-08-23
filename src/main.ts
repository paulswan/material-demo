import './polyfills';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((ref) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const myWindow = window as { [key: string]: any };
    // Ensure Angular destroys itself on hot reloads.
    if (myWindow['ngRef']) {
      myWindow['ngRef'].destroy();
    }
    myWindow['ngRef'] = ref;
    // Otherwise, log the boot error
  })
  .catch((err) => console.error(err));
