import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { QualityComponent } from './components/quality/quality.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { RouterModule, ROUTES } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LightboxModule } from 'ngx-lightbox';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    QualityComponent,
    TopbarComponent,
    SidenavComponent,
    SkillsComponent,
    ContactsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CarouselModule,
    LightboxModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
