# BackpackerClone

#### _By Kaila Goff_

## Description

_An attempt to recreate the Backpacker Magazine website using Angular._

View Backpacker Magazine clone attempt here : https://backpacker-clone.firebaseapp.com/

<kbd><img src="src/img/screenshot.png" alt=""></kbd>

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

##  Current Features
  * Firebase database
  * User Authentication
  * Routing for all current pages
  * Dynamic Routing

### Under-Development Features(currently working on)
  * Styling and content of components
  * Google API
  * Instagram API

## Components
  * Gear | Hike | Images | Media | Skills | Stories | Survival | Trips

  ## Installation

  1. _`$ git clone` [] _

  2. _`$ cd backpacker_clone`_

  3.  _`$ npm install -g angular-cli`_

  4. _Add Firebase API Key (see next section)_

  5. _`$ ng serve --open`_

  ## Firebase API key

  This app requires the use a Firebase api key to access Firebase database features.
  You can acquire one of your own to use when running this project by visiting the [Firebase Website](https://firebase.google.com).

  * Add a new project.

  * Once your new project is created, click the gear icon next to Project Overview to access your project settings.

  * Click the button that says "Add Firebase to your web app" and copy the information from the modal window that pops up.

  * Create a file called `api-keys.ts` in the `src/app/` directory and add the following code with your API key information in place of the 'xxx's:

  ```
  export var masterFirebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseUrl: "https://xxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messageingSenderId: "xxxx"
  };
  ```

#### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

#### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

#### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

#### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

#### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Known Bugs

  * _Footer overlaps images in media component._

## Support and contact details

  _To suggest changes, submit a pull request in the GitHub repository._

## Technologies Used

  * HTML
  * CSS
  * JavaScript
  * NPM
  * Angular
  * Firebase

### License

  *MIT License*

Copyright (c) 2018 **Kaila Goff**
