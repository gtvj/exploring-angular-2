import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// @NGModule is a decorator imported from @angular/core.
// It's use here (being placed before AppModule) is to decorate AppModule
// BrowserModule.

@NgModule({
    imports: [ BrowserModule ]
})

export class AppModule {
}
