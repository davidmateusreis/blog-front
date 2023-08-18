import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserService } from '../_services/user.service';
import { UserAuthService } from '../_services/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup
  submitted = false;

  constructor(
    private userService: UserService,
    private userAuthService: UserAuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      userPassword: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  login(loginForm: FormGroup) {
    this.submitted = true;
    this.userService.login(loginForm.value).subscribe(
      (response: any) => {
        this.userAuthService.setToken(response.jwtToken);
        this.userAuthService.setRoles(response.user.role);

        const role = response.user.role[0].roleName;
        alert('Success');
        if (role === "Admin") {
          this.router.navigate(["/admin"]);
        } else {
          this.router.navigate(["/user"]);
        }
      },
      (error) => {
        alert('Something is wrong!');
        console.log(error);
      }
    );
  }
}
