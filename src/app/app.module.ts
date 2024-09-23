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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    QualityComponent,
    TopbarComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CarouselModule,
    LightboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
