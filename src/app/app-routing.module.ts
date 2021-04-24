import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { LocationComponent } from './location/location.component';
import { ResumeComponent } from './resume/resume.component';
import { PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'',component:HomeComponent,},
  {path:'\Home',component:HomeComponent},
  {path:'\Contact',component:ContactComponent},
  {path:'\Blog',component:BlogComponent},
  {path:'\Location',component:LocationComponent},
  {path:'\Resume',component:ResumeComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
