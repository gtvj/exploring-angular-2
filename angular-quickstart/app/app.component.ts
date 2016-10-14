// Import the Component decorator from @angular/core
import { Component } from '@angular/core';

export class Hero {
    id: number;
    name: string;
}

const HEROES: Hero[] = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];

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
        <h2>My Heroes</h2>
        <ul class="heroes">
            <li *ngFor="let hero of heroes">
                <span class="badge">{{hero.id}}</span> {{hero.name}}
            </li>
        </ul>
        
        <h2>{{hero.name}} details!</h2>
        <div><label>id: </label>{{hero.id}}</div>
        <div><label>name: </label>
            <input [(ngModel)]="hero.name" placeholder="name">
        </div>`,
    styles: [`    
      .selected {
        background-color: #CFD8DC !important;
        color: white;
      }
      .heroes {
        margin: 0 0 2em 0;
        list-style-type: none;
        padding: 0;
        width: 15em;
      }
      .heroes li {
        cursor: pointer;
        position: relative;
        left: 0;
        background-color: #EEE;
        margin: .5em;
        padding: .3em 0;
        height: 1.6em;
        border-radius: 4px;
      }
      .heroes li.selected:hover {
        background-color: #BBD8DC !important;
        color: white;
      }
      .heroes li:hover {
        color: #607D8B;
        background-color: #DDD;
        left: .1em;
      }
      .heroes .text {
        position: relative;
        top: -3px;
      }
      .heroes .badge {
        display: inline-block;
        font-size: small;
        color: white;
        padding: 0.8em 0.7em 0 0.7em;
        background-color: #607D8B;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -4px;
        height: 1.8em;
        margin-right: .8em;
        border-radius: 4px 0 0 4px;
      }
`]

})

// Define the AppComponent Class
// Note: this is exported so that we can use the component in our application
export class AppComponent {
    title = 'Tour of heroes';
    heroes = HEROES;
    hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };
}
