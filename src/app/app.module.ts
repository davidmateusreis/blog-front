import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './_auth/auth.guard';
import { AuthInterceptor } from './_auth/auth.interceptor';
import { UserService } from './_services/user.service';
import { RegisterComponent } from './register/register.component';
import { AddPostComponent } from './add-post/add-post.component';
import { FooterComponent } from './footer/footer.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { ShowAllPostDetailsComponent } from './show-all-post-details/show-all-post-details.component';
import { ShowPostDetailsComponent } from './show-post-details/show-post-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DateAsAgoPipe } from './shared/date-as-ago.pipe';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    ForbiddenComponent,
    UserComponent,
    AdminComponent,
    RegisterComponent,
    AddPostComponent,
    FooterComponent,
    ShowAllPostDetailsComponent,
    ShowPostDetailsComponent,
    DateAsAgoPipe,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    EditorModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    UserService
  ],
  bootstrap: [AppComponent],
  exports: [
    DateAsAgoPipe
  ]
})
export class AppModule { }
