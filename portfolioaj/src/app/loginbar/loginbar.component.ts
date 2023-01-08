import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,} from '@angular/forms';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-loginbar',
  templateUrl: './loginbar.component.html',
  styleUrls: ['./loginbar.component.scss']
})
export class LoginbarComponent implements OnInit {
  
  public formLogin: FormGroup;

  // Inyectar en el constructor el formBuilder

  constructor(private formBuilder: FormBuilder){ 

    ///Creamos el grupo de controles para el formulario de login
    this.formLogin= this.formBuilder.group({
      password:['',[Validators.required, Validators.minLength(8)]],
      username:['',[Validators.required, Validators.minLength(5),Validators.maxLength(12)]],
   })
  }

  ngOnInit() {}

  get Password(){
   return this.formLogin.get("password");
  }
 
  get Username(){
   return this.formLogin.get("username");
  }

  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }

  get UsernameValid() {
    return false
  }
 

  onEnviar(event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault; 
 
    if (this.formLogin.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo salio bien ¡Enviar formuario!");
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.formLogin.markAllAsTouched(); 
    }
 
  }

}

