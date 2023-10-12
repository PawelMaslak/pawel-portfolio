import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { NavbarMobileComponent } from 'src/app/components/navbar/navbar-mobile/navbar-mobile.component';
import { NavbarDesktopComponent } from 'src/app/components/navbar/navbar-desktop/navbar-desktop.component';



@NgModule({
  declarations: [
    NavbarComponent,
    NavbarMobileComponent,
    NavbarDesktopComponent
  ],
  exports: [
    NavbarComponent,
    NavbarMobileComponent,
    NavbarDesktopComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NavbarModule { }
