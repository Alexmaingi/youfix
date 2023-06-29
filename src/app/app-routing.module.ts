import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { HomeCardComponent } from './home-card/home-card.component';
import { QuestionCardComponent } from './question-card/question-card.component';
import { TagsComponent } from './tags/tags.component';
import { UsersComponent } from './users/users.component';
import { UserDasboardComponent } from './user-dasboard/user-dasboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OneQuestionComponent } from './one-question/one-question.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'landing', component: LandingPageComponent },

  {
    path: '',
    component: HeroComponent,

    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeCardComponent },
      { path: 'questions', component: QuestionCardComponent },
      { path: 'tags', component: TagsComponent },
      { path: 'users', component: UsersComponent },
      {
        path: 'dashboard',
        component: UserDasboardComponent,
      },
      { path: 'question/:id', component: OneQuestionComponent },
    ],
  },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    children: [
      { path: '', redirectTo: 'adminquestions', pathMatch: 'full' },
      { path: 'adminquestions', component: QuestionCardComponent },
      { path: 'adminusers', component: UsersComponent },
    ],
  },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
