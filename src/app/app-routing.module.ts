import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { HomeCardComponent } from './home-card/home-card.component';
import { QuestionCardComponent } from './question-card/question-card.component';
import { TagsComponent } from './tags/tags.component';
import { UsersComponent } from './users/users.component';
import { UserDasboardComponent } from './user-dasboard/user-dasboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  // { path: 'signup', component: SignupComponent },
  // { path: 'signin', component: SigninComponent },

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
    ],
  },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    children: [
      { path: 'adminquestions', component: QuestionCardComponent },
      { path: 'adminusers', component: UsersComponent },
    ],
  },

  // {
  //   path: 'dashboard',
  //   component: UserDasboardComponent,
  //   children: [{ path: 'home', component: HomeCardComponent }],
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
