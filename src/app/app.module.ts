import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeCardComponent } from './home-card/home-card.component';
import { QuestionCardComponent } from './question-card/question-card.component';
import { AnswersCardComponent } from './answers-card/answers-card.component';
import { CommentCardComponent } from './comment-card/comment-card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { TagsComponent } from './tags/tags.component';
import { UsersComponent } from './users/users.component';
import { UserDasboardComponent } from './user-dasboard/user-dasboard.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SignupComponent,
    SigninComponent,
    LandingPageComponent,
    SidebarComponent,
    HomeCardComponent,
    QuestionCardComponent,
    AnswersCardComponent,
    CommentCardComponent,
    HeroComponent,
    HeroComponent,
    TagsComponent,
    UserDasboardComponent,
    UsersComponent,
    NavbarComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
