import '@angular/compiler';
import 'imports/ui/polyfills';
import { Meteor } from 'meteor/meteor';

import { enableProdMode } from '@angular/core';
import { AppModule } from 'imports/ui/app/app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import "node_modules/primeicons/primeicons.css";
// import "node_modules/primeng/resources/themes/saga-blue/theme.css";
import "node_modules/primeng/resources/primeng.min.css";
import "node_modules/primeflex/primeflex.css";

/* Layout */
// import "assets/layout/styles/layout/layout.scss";

/* PrimeNG */
import "node_modules/primeng/resources/primeng.min.css";
// import "node_modules/primeflex/primeflex.scss";
import "node_modules/primeicons/primeicons.css";

/* Code Highlight */
import "node_modules/prismjs/themes/prism-coy.css";

/* Quill Text Editor for p-editor */
import "node_modules/quill/dist/quill.core.css";
import "node_modules/quill/dist/quill.snow.css";



Meteor.startup( () => {

    if ( Meteor.isProduction ) {
        enableProdMode();
    }

    platformBrowserDynamic().bootstrapModule( AppModule ).then();

} );
