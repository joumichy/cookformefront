import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { User } from '../user'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],
})
export class ConnexionComponent implements OnInit {

  @Input() showConnexion: Boolean;
  api : string  = 'http://localhost:5000/';
  signin : string = 'user/signin';

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      
    })
  };

  //Donnée Utilisateur
  public user : User = {
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
  form: any;
  message : string;
  constructor(private router : Router,private http: HttpClient) {

    this.form = new FormGroup(
      {
        username: new FormControl("",Validators.required),
        password: new FormControl("",Validators.required),
      }
    );
    
   }

  ngOnInit() {

    
  }

   connectUser(info : any){

    let url : string = this.api + this.signin;

  
    this.http.post(url,info,this.httpOptions).subscribe({
           
    next: data => {
      
      this.router.navigate(['/menu'], {queryParams :{data : JSON.stringify(data)}});
     
      
    },
    error: error =>{
    
      if(error.status == 401){
       
      }
      console.error('Connexion Impossible'+ error.status);
      

    },
     });

  }

  onConnexion(){
    //Faire la Connexion

    //get DATA
    let data : any =this.form.value;
    this.connectUser(data);
    

  }

} 
