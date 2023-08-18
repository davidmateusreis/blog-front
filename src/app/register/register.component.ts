import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup
  submitted = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      userFirstName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      userLastName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      userEmail: ['', [Validators.required, Validators.email]],
      userPassword: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  register(registerForm: FormGroup) {
    this.submitted = true;
    this.userService.register(registerForm.value).subscribe(
      (response) => {
        alert('Success');
        this.router.navigate(['/login']);
      },
      (error) => {
        alert('Something is wrong!');
        console.log(error);
      }
    );
  }
}
