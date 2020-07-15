import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  @Input() showInscprition : boolean;

  api : string  = environment.apiUrl;
  signUp : string = 'auth/signup';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      
    })
  };
  
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
    confirmPassword: string;
    form: any;
    item = [
      {id:'1', text: 'Client' },
      {id:'2', text: 'Traiteur' },
    ]

 

  constructor(private http: HttpClient) {

    this.form = new FormGroup(
      {

        firstName: new FormControl("",[Validators.required, Validators.minLength(4)]),
        lastName: new FormControl("",[Validators.required, Validators.minLength(4)]),
        username: new FormControl("",[Validators.required, Validators.minLength(4)]),
        password: new FormControl("",[Validators.required, Validators.minLength(4)]),
        mail: new FormControl("",[Validators.required,Validators.email]),
        role: new FormControl("",[Validators.required,]),
        phoneNumber: new FormControl("",[Validators.required, Validators.minLength(10)]),

      }
    );
   }

 

  ngOnInit() {
    
    
  }

  onSubmitInscription(){
    //Fonction pour enregistrer les données en BDD
    console.log(this.user)
  }


  submitUser(userInfo : any){

    let url : string = this.api + this.signUp;

  
    this.http.post(url,userInfo,this.httpOptions).subscribe({
           
    next: data => {
      
      //this.router.navigate(['/menu'], {queryParams :{data : JSON.stringify(data)}});
     console.log('Inscription Succesful');
     console.log(data);
      
    },
    error: error =>{
    
      if(error.status == 500){
       
      }
      console.error("Erreur lors de l'inscription'"+ error.status);
      

    },
     });

  }

  onSubmit(){
    //Faire l'inscription

    //get DATA
    let data : any =this.form.value;
    console.log(data)
    this.submitUser(data);
    

  }


}
