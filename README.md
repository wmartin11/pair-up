# PairUp - Quickstart

If building fails with a reference to some node-sass binding problem try:
 
 1) dropping to a prompt at the project root and run "node -v" (node-sass seems to like version 8.x)
 2) Once node -v shows ver 8 try "npm rebuild node-sass --force"
 3) try building/starting/test again if it fails then it is something I have not seen
 4) if it works, you can try resetting your node version to its previous values (the node-sass binding will remain)
 5) confirm all is well
 
# Overview

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
