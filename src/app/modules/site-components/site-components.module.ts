import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from 'src/app/components/welcome/welcome.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';



@NgModule({
  declarations: [
    WelcomeComponent,
    FooterComponent
  ],
  exports: [
    WelcomeComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SiteComponentsModule { }
