import { Component, OnInit } from '@angular/core';

export type EditorType = 'Admin' | 'Doctor' | 'Patient' | 'Prescriber';

@Component({
  selector: 'app-main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.css']
})
export class MainAppComponent implements OnInit {
  editor: EditorType = 'Doctor';

  get showAdminEditor() {
    return this.editor === 'Admin';
  }

  get showDoctorEditor() {
    return this.editor === 'Doctor';
  }

  get showPatientEditor() {
    return this.editor === 'Patient';
  }

  get showPrescriberEditor() {
    return this.editor === 'Prescriber';
  }

  constructor() { }

  ngOnInit() {
  }

  toggleEditor(type: EditorType) {
    this.editor = type;
  }

}