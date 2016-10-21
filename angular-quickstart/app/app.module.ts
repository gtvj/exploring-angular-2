import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

// Importing our AppComponent class
import { AppComponent } from './app.component';

// @NGModule is a decorator imported from @angular/core.
// It's use here (being placed before AppModule) is to decorate AppModule
// BrowserModule.

// The 'imports' property makes all listed public components visible to the component templates
// The 'bootstrap' property tells Angular 2 what the 'root' module is
// The 'declarations' property declares the directives and components
@NgModule({
    imports: [ BrowserModule, FormsModule ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
})

export class AppModule {
}
