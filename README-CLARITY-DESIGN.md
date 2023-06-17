# WeplayAngular
[Clarity Design](https://core.clarity.design/) is a scalable, customizable, open source design system bolstered by the people that build with it, the people we build it for, and the community that makes us who we are.

## Instalation

###Step 1: Install packages

``npm install @clr/angular @clr/ui @cds/core``

###Step 2: Adding scripts and styles

Add the files to the angular.json file. Find the scripts and styles arrays and add the following:
``"styles": [
"node_modules/@clr/ui/clr-ui.min.css"
],``

###Step 3: Add Clarity to Angular application
Import the ClarityModule into your Angular application's module. Some features also depend upon the BrowserAnimationsModule, so you should add it as well.
````
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';
import { AppComponent } from './app.component';

@NgModule({
imports: [BrowserModule, BrowserAnimationsModule, ClarityModule],
declarations: [AppComponent],
bootstrap: [AppComponent],
})
export class AppModule {}
````
###
More information can be found [here](https://core.clarity.design/get-started/developing/angular/)
