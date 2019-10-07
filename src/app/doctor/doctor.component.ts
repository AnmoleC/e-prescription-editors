import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    middleName:[''],
    lastName: [''],
  });


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}