import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import {PostsComponent} from "./posts/posts.component";
import {CommentsLikesComponent} from "./comments-likes/comments-likes.component";
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component:LoginComponent},
  { path: 'registration', component:RegistrationComponent},
  { path: 'posts', component: PostsComponent },
  { path: 'comments-likes/:id', component: CommentsLikesComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]

})
export class AppRoutingModule { }
