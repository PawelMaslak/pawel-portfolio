import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgParticlesModule } from 'ng-particles';
import { NavbarModule } from './modules/navbar/navbar.module';
import { SiteComponentsModule } from './modules/site-components/site-components.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgParticlesModule,
    NavbarModule,
    SiteComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
