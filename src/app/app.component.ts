import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // loginForm: FormGroup;

  constructor(
    // private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    // this.loginForm = this.fb.group({
    //   username: ['', Validators.required],
    //   password: ['', Validators.required],
    // });
  }

  // onSubmit() {
  //   console.log(this.loginForm.value);
  // }
}
