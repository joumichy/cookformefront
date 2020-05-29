import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user'
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  @Input() showInscprition : boolean;

  user : User = {
    //Core
    id: null,
    mail : null,
    username: null,
    password: null,
    //

    firsName : null,
    lastName : null,
    birthday : null,
    age : null,
    city : null,
    
    userType : null
  };
    password2: string;
    form: any;
    item = [
      {id:'1', text: 'Client' },
      {id:'2', text: 'Traiteur' },
    ]


  constructor() {
    this.form = new FormGroup(
      {

        firstName: new FormControl("",Validators.required),
        lastName: new FormControl("",Validators.required),
        username: new FormControl("",Validators.required),
        password: new FormControl("",Validators.required),
        mail: new FormControl("",Validators.required),
        role: new FormControl("",Validators.required),
        phoneNumber: new FormControl("",Validators.required),

      }
    );
   }

  ngOnInit() {
    
  }

  onSubmitInscription(){
    //Fonction pour enregistrer les données en BDD
    console.log(this.user)
  }


}
