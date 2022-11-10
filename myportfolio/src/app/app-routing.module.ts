import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [{path: '', component: AboutComponent},
{path:'skills', component: SkillsComponent},
{path:'experience', component: ExperienceComponent},
{path:'education', component: EducationComponent},
{path:'projects', component: ProjectsComponent},
{path:'testimonials', component: TestimonialsComponent},
{path:'achievements', component: AchievementsComponent},
{path:'contact', component: ContactComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
