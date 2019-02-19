import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive-form-validation-a';
  userForm: FormGroup;
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      name: ['', {
        validators: Validators.required,
        updateOn: 'blur',
      }],
      email: ['', {
        validators: [Validators.required, Validators.pattern(this.emailRegex)],
        updateOn: 'blur',
      }],
      phone: ['', {
        validators: [Validators.minLength(10)],
        updateOn: 'blur',
      }]
    });
  }

  onSubmit() {
    console.log(this.userForm.value);
  }

  test() {
    console.log(this.userForm);
  }
}
