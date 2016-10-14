// Import the Component decorator from @angular/core
import { Component } from '@angular/core';

export class Hero {
    id: number;
    name: string;
}

// Decorate the AppComponent class with the Component decorator
// This example has the effect of:
//      1.  Marking AppComponent as an Angular Component
//          (Remember that an Angular 2 app is a tree of components)
//      2.  Defining the template for the view
//      3.  Setting a CSS selector that identifies this component in the view
@Component({
    selector: 'my-app',
    template: `
          <h1>{{title}}</h1>
          <h2>{{hero.name}} details!</h2>
          <div><label>id: </label>{{hero.id}}</div>
          <div><label>name: </label>
          <input [(ngModel)]="hero.name" placeholder="name">
          </div>
  `})

// Define the AppComponent Class
// Note: this is exported so that we can use the component in our application
export class AppComponent {
    title = 'Tour of heroes';
    hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };
}
