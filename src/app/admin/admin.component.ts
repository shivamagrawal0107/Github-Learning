import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  // profileForm:FormGroup;
  constructor(
    // private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.create();
    
  }
  create(){

  // this.profileForm = this.fb.group({
  //   firstName: [''],
  //   lastName: [''],
  // });
  }
  // onSubmit() {
  //   console.log(this.profileForm.value);
  // }

}
