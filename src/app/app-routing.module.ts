import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  {path: '**', pathMatch: 'full', redirectTo: '/'},
  { path: '', component: HomeComponent },
  // { path: 'home', component: HomeComponent },
  // { path: 'about', component: AboutComponent },
  // { path: 'projects', component: ProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
