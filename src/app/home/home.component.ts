import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  dynamicForm: FormGroup = null;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.dynamicForm = this.formBuilder.group({
          numberOfTickets: ['', Validators.required],
          tickets: new FormArray([])
      });
  }

  // convenience getters for easy access to form fields
  get f() { return this.dynamicForm.controls; }
  get t() { return this.f?.tickets as FormArray; }

  onChangeTickets(e) {
      const numberOfTickets = e.target.value || 0;
      if (this.t?.length < numberOfTickets) {
          for (let i = this.t.length; i < numberOfTickets; i++) {
              this.t.push(this.formBuilder.group({
                  name: ['', Validators.required],
                  email: ['', [Validators.required, Validators.email]],
                  date: new FormControl(new Date())
              }));
          }
      } else {
          for (let i = this.t?.length; i >= numberOfTickets; i--) {
              this.t.removeAt(i);
          }
      }
  }

  getErrorMessage(pickerInput: string = ''): string {
      if (!pickerInput || pickerInput === '' ) {
        return 'Please choose a date.';
      }
      return this.isMyDateFormat(pickerInput);
    }

    isMyDateFormat(date: string): string {
      if (date.length !== 10) {
        return 'Invalid input: Please input a string in the form of YYYY-MM-DD';
      } else {
        const da = date.split('-');
        if (da.length !== 3 || da[0].length !== 4 || da[1].length !== 2 || da[2].length !== 2) {
          return 'Invalid input: Please input a string in the form of YYYY-MM-DD';
        } else if (moment(date).isValid()) {
          return 'Invalid date: Please input a date no later than today';
        } else if (!moment(date).isValid()) {
          return 'Invalid date: Please input a date with a valid month and date.';
        }
      }
      return 'Unknown error.';
    }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.dynamicForm.invalid) {
          return;
      }

      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.dynamicForm.value, null, 4));
  }

  onReset() {
      // reset whole form back to initial state
      this.submitted = false;
      this.dynamicForm.reset();
      this.t.clear();
  }

  onClear() {
      // clear errors and reset ticket fields
      this.submitted = false;
      this.t.reset();
  }
}