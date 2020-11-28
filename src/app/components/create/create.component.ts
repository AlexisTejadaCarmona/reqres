import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ReqresService } from 'src/app/services/reqres.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styles: [
  ]
})
export class CreateComponent implements OnInit {

  form: FormGroup;
  postResponse: any = '';
  submitted = false;

  get validName(){
    return this.form.get('name').invalid && this.form.get('name').touched;
  }

  get validJob(){
    return this.form.get('job').invalid && this.form.get('job').touched;
  }

  get validEmail(){
    return this.form.get('email').invalid && this.form.get('email').touched;
  }

  get pass1(){
    return this.form.get('pass1').invalid && this.form.get('pass1').touched;
  }

  get pass2(){
    const pass1 = this.form.get('pass1').value;
    const pass2 = this.form.get('pass2').value;
    return (pass1 === pass2) ? false : true;
  }

  constructor(private formBuilder: FormBuilder, private reqres: ReqresService) {
    this.createForm();
   }

  ngOnInit(): void {
    console.log(this.form);
  }

  createForm(){
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      job: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      pass1: ['', [Validators.required]],
      pass2: ['', [Validators.required]]
    });
  }

  enviar(){
    console.log(this.form);
    if (this.form.invalid) {
      return Object.values( this.form.controls ).forEach( control => {
        control.markAsTouched();
        this.submitted = false;
      } );
    }else{
      const data = {
        'name': this.form.get('name').value,
        'job': this.form.get('job').value,
        'email': this.form.get('email').value,
        'password': this.form.get('pass1').value
      };
      this.reqres.addUser(data).subscribe((data: any) => {
        this.postResponse = data;
        console.log(data);
        this.submitted = true;
      });
    }
  }
}
