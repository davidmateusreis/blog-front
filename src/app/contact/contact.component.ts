import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../_services/contact.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      messageAuthor: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      messageEmail: ['', [Validators.required, Validators.email, Validators.minLength(4), Validators.maxLength(40)]],
      messageContent: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(2000)]]
    });
  }

  sendMessage(contactForm: FormGroup) {

    this.submitted = true;

    this.contactService.sendMessage(contactForm.getRawValue()).subscribe(
      (response) => {
        alert('Thanks for your feedback and support!');
        contactForm.reset();
        this.router.navigate(['/']);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
}
