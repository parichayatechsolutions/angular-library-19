# angular-library-19

1. npm install -g @angular/cli then check ng version - v19.2
2. Create an Angular Workspace - ng new angular-wc-workspace --create-application=false
3. Create the Web Component Library - ng generate library shared-wc-lib --standalone
4. Create a Standalone Component to Turn Into a Web Component - ng generate component hello-world --project=shared-wc-lib --standalone
<!-- optional - 5. Create a Custom Bootstrap File for Web Component - src/bootstrap.ts 
        import { importProvidersFrom, inject } from '@angular/core';
        import { bootstrapApplication, createCustomElement } from '@angular/platform-browser';
        import { HelloWorldComponent } from './lib/hello-world/hello-world.component';
        import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

        bootstrapApplication(HelloWorldComponent, {
        providers: [importProvidersFrom(BrowserAnimationsModule)],
        }).then(() => {
        const el = createCustomElement(HelloWorldComponent, {
            injector: inject(Injector),
        });
        customElements.define('hello-world', el);
        });
6. Update Library Build Options to Bundle as Web Component 
{
  "$schema": "../../node_modules/ng-packagr/ng-package.schema.json",
  "dest": "../../dist/shared-wc-lib",
  "lib": {
    "entryFile": "src/bootstrap.ts"
  }
} -->
7. Create wc-consumer-web App in Same Workspace - ng generate application wc-consumer-web --standalone --routing=false
8. Now add the component from shared-wc-lib
9. in shared-wc-lib - public-api.ts - export * from './lib/hello-world/hello-world.component';
10. in shared-wc-lib - ng-package -
"lib": {
    "entryFile": "src/public-api.ts"
}

11. create scripts in package.json
    "watch:lib":"ng build shared-wc-lib --watch",
    "build:lib": "ng build shared-wc-lib",
    "start:web": "ng serve wc-consumer-web",
    "build:web": "ng build wc-consumer-web --configuration production",
12. to link both lib and web for realtime changes in lib project 
    npm i 
    Build the lib: npm run watch:lib
    Inside the dist/shared-wc-lib folder:
    npm link
    Then in your wc-consumer-web:
    npm link shared-wc-lib
13. 
    in html
    <lib-hello-world></lib-hello-world>
    in ts 
    import { Component } from '@angular/core';
    import { HelloWorldComponent } from 'shared-wc-lib'
    @Component({
    selector: 'app-root',
    imports: [HelloWorldComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
    })
    export class AppComponent {
    title = 'wc-consumer-web';
    }

14. Enable local file access in your browser
    Find the Chrome path 
        C:\Program Files\Google\Chrome\Application\chrome.exe
        C:\Program Files (x86)\Google\Chrome\Application\chrome.exe
        then - "C:\Users\User\AppData\Local\Google\Chrome\Application\chrome.exe" --allow-file-access-from-files - this will open the browser 
        then file:///C:/your/project/path/dist/wc-consumer-web/index.html 
            Replace /your/project/path/ with the actual folder path to your dist/wc-consumer-web.
        Make a Shortcut
        If you'd like to launch it easily:

        Right-click your Desktop → New → Shortcut

        Paste this as the target:
        "C:\Users\USER\AppData\Local\Google\Chrome\Application\chrome.exe" --allow-file-access-from-files
        Give it a name like “Chrome File Access Mode”

        Double-click that shortcut anytime you want to test your app locally without a server.


15.to test in http server 
    npm install -g http-server
    Navigate to Your Build Directory and http-server -p 8080

16. to expose web components to index .html 
    create src/main.ts in shared-web-lib and add these 
        import { platformBrowser } from '@angular/platform-browser';
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
        defineCustomElement(GoodbyeWorldComponent, 'lib-goodbye-world');
        });
