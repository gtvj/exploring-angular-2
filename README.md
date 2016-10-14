# Exploring Angular 2

## Purpose

This repository is intended to act as a companion to the team exploring Angular 2. Commits to this repository will be carefully considered to help others in the learning process.

Key points and related links are provided in the 'Notes' section below

## Notes

### Week 4 - Tour of Heroes (continued)

### Week 3 - Tour of Heroes

This week we began the ['Tour of Heroes'](https://angular.io/docs/ts/latest/tutorial/) tutorial. This introduced several concepts, including: 

* Multi-line template strings (an ES6 feature)
* One-way data binding within a template to a class attribute `{{ }}`
* Two-way data binding:
    * via the *built-in directive* `ngModel` from the `FormsModule` 
    * that we needed to import `FormsModule` in `app.module.ts` to make use of it
* That `*ngFor` allows us to iterate over an array accessing each index
* That the `styles` property on `@Component` allows us to specify styles for our component and that *regardless of the rules we apply, they will only affect our component*

#### Related concepts

* The templates used this week make use of [ES6 Template Literals](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Template_literals). @gtvj wrote a [short introduction to these](http://15volts.com/2016/10/11/simple-template-literals/) in preparation for the session today

### Week 2 

If you didn't complete the task from Week 1, clone the repo and `npm install` from the root directory.

Running through the sample application:

* `app.component.ts` is our application component. It defines the `AppComponent` class, decorates it as a Component and exports it
* `app.module.ts` is our application module. It defines and exports the `AppModule` class and decorates it as a Module, setting `AppComponent` as the bootstrap
* `main.ts` starts our application

#### Related concepts

* Angular 2 applications should be _composed_ from closely related blocks of functionality referred to as **modules**. See `app.module.ts` for:
    * Examples of `import` - the bits the quick start needs from the Angular framework
    * The creation of the `AppModule` class and its decoration with `@NGModule`

##### Decorator pattern

> In object-oriented programming, the decorator pattern... is a design pattern that allows behavior to be added to an individual object... without affecting the behavior of other objects from the same class. The decorator pattern is often useful for adhering to the Single Responsibility Principle, as it allows functionality to be divided between classes with unique areas of concern

##### Single responsibility principle

> The single responsibility principle states that every module or class should have responsibility over a single part of the functionality provided by the software, and that responsibility should be entirely encapsulated by the class. All its services should be narrowly aligned with that responsibility. 

##### JavaScript modules and module loader libraries

ECMAScript 2015 introduced JavaScript modules.

* An ES6 module is a JavaScript file containing code (there's nothing special about them)
* You can export any top-level `function`, `class`, `var`, `let`, or `const`.
* You use `import` and `export` in modules

Here's an example involving two files: exporter.js and importer.js

```javascript

// exporter.js

export function my_favourite_editor(tool) {
    if(tool === 'PHPStorm') {
        return true;
    }
    return false;
}

```

which is imported into `importer.js`

```javascript

// importer.js

import { my_favourite_editor } from './exporter';

my_favourite_editor('PHPStorm'); // true

```

For more detail read this post about [ES6 modules in depth](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/)

At the current time, no browser supports ES2015 modules and - despite [TypeScript providing support for modules](https://www.typescriptlang.org/docs/handbook/modules.html) - the demo chooses to use SystemJS (one of several module loading libraries currently available). This application uses [SystemJS](https://github.com/systemjs/systemjs) to load JavaScript modules. Have a look at `systemjs.config.js` to see the way it has been configured for this app.

#### Task - week 2 

Create a second component within the app which shows a paragraph of text.

### Week 1

#### TypeScript

Angular 2 source code is written in [Typescript](https://www.typescriptlang.org/). By using Typescript to write our Angular 2 code we are able to use ES2015 now, including: 

* Classes
* Modules
* Strong typing
* Decorators

#### Angular overview

* Components
    * The 'bootstrap' component
    * Each component can have an HTML template to which you can wire up:
        * Events
        * Data
    * Nesting components
    * Created using the Component class
    
#### Task - Angular 2 Quick Start

Create your own repositories and follow steps 1 to 6 of the [Angular 2 quick start](https://angular.io/docs/ts/latest/quickstart.html)