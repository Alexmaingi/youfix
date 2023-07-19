import { AuthEffects } from './State/Effects/authEffect';
import { NgModule, isDevMode } from '@angular/core';
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
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// import { UserEffects } from './State/Effects/userEffect';
// import { userReducers } from './State/Reducers/userReducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { questionReducer } from './State/Reducers/questionReducer';
import { QuestionEffects } from './State/Effects/questionEffect';
import { authReducer } from './State/Reducers/authReducer';
import { AuthService } from './Services/auth.service';
import { answerReducer } from './State/Reducers/answerReducer';
import { AnswerEffects } from './State/Effects/answerEffect';
import { userReducer } from './State/Reducers/userReducer';
import { UsersEffects } from './State/Effects/userEffect';

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
    HttpClientModule,
    StoreModule.forRoot(
      {
        auth: authReducer,
        question: questionReducer,
        answers: answerReducer,
        user: userReducer,
      },
      {}
    ),
    EffectsModule.forRoot([
      AuthEffects,
      QuestionEffects,
      AnswerEffects,
      UsersEffects,
    ]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
