import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private formBuilder : FormBuilder){}
  
  registroForm = this.formBuilder.group({
    nombre: ['', Validators.required],
    email: ['', {validators:[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]}],
    mensaje: ['', Validators.required],
  });

  get nom(){return this.registroForm.get('nombre');}
  get ema(){return this.registroForm.get('email');}
  get men(){return this.registroForm.get('mensaje');}
  
  alert = "uno";

  onSubmit(){
    if(this.registroForm.valid){
      this.alert = "dos";
    }
    else{
      this.alert = "tres";
    }
  }
}
