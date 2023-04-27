import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

$(document).on("select2:open", () => {
  // to focus on the search box when the dropdown is opened
  let a = document.querySelector(".select2-container--open .select2-search__field") as HTMLElement | null;
  a.focus();
})