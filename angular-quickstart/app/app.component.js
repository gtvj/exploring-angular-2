"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Import the Component decorator from @angular/core
var core_1 = require('@angular/core');
var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());
exports.Hero = Hero;
// Decorate the AppComponent class with the Component decorator
// This example has the effect of:
//      1.  Marking AppComponent as an Angular Component
//          (Remember that an Angular 2 app is a tree of components)
//      2.  Defining the template for the view
//      3.  Setting a CSS selector that identifies this component in the view
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of heroes';
        this.hero = {
            id: 1,
            name: 'Windstorm'
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n          <h1>{{title}}</h1>\n          <h2>{{hero.name}} details!</h2>\n          <div><label>id: </label>{{hero.id}}</div>\n          <div><label>name: </label>{{hero.name}}</div>\n  " }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map