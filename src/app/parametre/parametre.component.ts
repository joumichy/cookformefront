import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parametre',
  templateUrl: './parametre.component.html',
  styleUrls: ['./parametre.component.css'],

})
export class ParametreComponent implements OnInit {
  message : string;
  infoUser : any;
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

  public userToPush : User;
  public constructor(private activatedRoute: ActivatedRoute) {
 
   }

   sub :any;
  data: any;

  ngOnInit(){
    this.sub = this.activatedRoute
      .queryParams
      .subscribe(params => {
        this.data = params['data'];
        this.infoUser = JSON.parse(this.data);
        this.user.username = this.infoUser['name'];
        console.log(params);
      });
    
    
  }

}
