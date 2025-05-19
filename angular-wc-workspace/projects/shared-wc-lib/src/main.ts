import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import { BrowserModule } from '@angular/platform-browser';
import { HelloWorldComponent } from './lib/hello-world/hello-world.component';

// You can define a helper to register multiple components
const defineCustomElement = (component: any, selector: string) => {
  const element = createCustomElement(component, {
    injector: injectorInstance
  });
  if (!customElements.get(selector)) {
    customElements.define(selector, element);
  }
};

let injectorInstance: any;

bootstrapApplication(HelloWorldComponent, {
  providers: [importProvidersFrom(BrowserModule)]
}).then(appRef => {
  injectorInstance = appRef.injector;
  defineCustomElement(HelloWorldComponent, 'lib-hello-world');
});
