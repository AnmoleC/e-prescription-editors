import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
profileForm = this.fb.group({
    patientID: [''],
    patientLegalID: [''],
    patientLegalIDType: [''],

    firstName: ['', Validators.required],
    middleName:[''],
    lastName: [''],

    dob: [''],
    gender: [''],

    bloodType: [''],
  });


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }


}