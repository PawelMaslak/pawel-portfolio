import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from 'src/app/components/welcome/welcome.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { AboutComponent } from 'src/app/components/about/about.component';
import { LoadingComponent } from 'src/app/components/loading/loading.component';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faInstagram,
  faGoogle,
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';

import {
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { ProjectsComponent } from 'src/app/components/projects/projects.component';
import { ProjectComponent } from 'src/app/components/projects/project/project.component';



@NgModule({
  declarations: [
    WelcomeComponent,
    FooterComponent,
    ProjectsComponent,
    ProjectComponent,
    AboutComponent,
    LoadingComponent
  ],
  exports: [
    WelcomeComponent,
    FooterComponent,
    ProjectsComponent,
    ProjectComponent,
    AboutComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class SiteComponentsModule { 
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faInstagram,
      faGoogle,
      faLinkedin,
      faGithub,
      faArrowRight
    );
  }
}
