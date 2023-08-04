import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './_auth/auth.guard';
import { RegisterComponent } from './register/register.component';
import { AddPostComponent } from './add-post/add-post.component';
import { ShowAllPostDetailsComponent } from './show-all-post-details/show-all-post-details.component';
import { PostResolveService } from './_services/post-resolve.service';
import { ShowPostDetailsComponent } from './show-post-details/show-post-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data: { roles: ['Admin'] } },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard], data: { roles: ['User'] } },
  { path: 'new-post', component: AddPostComponent, canActivate: [AuthGuard], data: { roles: ['Admin'] }, resolve: { post: PostResolveService } },
  { path: 'manage-posts', component: ShowAllPostDetailsComponent, canActivate: [AuthGuard], data: { roles: ['Admin'] } },
  { path: 'show-post', component: ShowPostDetailsComponent, canActivate: [AuthGuard], data: { roles: ['Admin'] }, resolve: { post: PostResolveService } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
