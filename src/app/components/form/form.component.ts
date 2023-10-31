import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IUrl } from 'src/app/models/i-url';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  form!: FormGroup;
  submitted: boolean = false;

  @Output() pageAdded = new EventEmitter<IUrl>();

  constructor(private _fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.form = this._fb.group({
      nombre: new FormControl('', [Validators.required]),
      url: new FormControl('', [Validators.required]),
    })
  }

  sendData() : void {
    this.submitted = true;
    if (this.form.valid) {
      this.pageAdded.emit(this.form.value);
      console.log(this.form.value);
      this.reset();
    }
  }

  reset() : void {
    this.submitted = false;
    this.initForm();
  }
}
