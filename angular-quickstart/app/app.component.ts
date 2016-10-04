// Import the Component decorator from @angular/core
import { Component } from '@angular/core';

// Decorate the AppComponent class with the Component decorator
// This example has the effect of:
//      1.  Marking AppComponent as an Angular Component
//          (Remember that an Angular 2 app is a tree of components)
//      2.  Defining the template for the view
//      3.  Setting a CSS selector that identifies this component in the view
@Component({
    selector: 'my-app',
    template: '<h1>My First Angular App</h1>'
})

// Define the AppComponent Class
// Note: this is exported so that we can use the component in our application
export class AppComponent {

}
