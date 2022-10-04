import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { ProfileSectionComponent } from './profile-section/profile-section.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { EducationSectionComponent } from './education-section/education-section.component';
import { ExperiencieSectionComponent } from './experiencie-section/experiencie-section.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    ProfileSectionComponent,
    AboutSectionComponent,
    EducationSectionComponent,
    ExperiencieSectionComponent,
    FooterSectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
