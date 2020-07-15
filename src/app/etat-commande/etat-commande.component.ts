import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UserInfo } from '../userclass/userinfo';
import { MarketCommands } from '../commande/marketcommands';

@Component({
  selector: 'app-etat-commande',
  templateUrl: './etat-commande.component.html',
  styleUrls: ['./etat-commande.component.css']
})
export class EtatCommandeComponent implements OnInit {

  constructor(public dialog: MatDialog,private http: HttpClient,private activatedRoute: ActivatedRoute) { }


  api : string  = environment.apiUrl;
  urlGetUserCommand : string = 'commands/all';
  infoUser :UserInfo;
  httpOptions : any
  marketCommands : MarketCommands[]
  sub : any;
  datasent :any;
  newData:any;



  ngOnInit() {

    this.sub = this.activatedRoute
    .queryParams
    .subscribe(params => {
      this.datasent = params['data'];
      this.infoUser = JSON.parse(this.datasent);
      console.log(params);
      console.log(this.infoUser.accessToken);
    });



    this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Bearer '+ this.infoUser.accessToken,
          
        })
      };
  }


  getAllCommands(){

    
    let url : string = this.api + this.urlGetUserCommand;

  
    this.http.get<MarketCommands>(url,this.httpOptions).subscribe({
           
    next: data => {

      console.log("SUCCESS");
      console.log(data);
      this.newData = data;
      this.marketCommands = this.newData;
     
      
    },
    error: error =>{
    
      if(error.status == 401){
       
      }
      console.error('Connexion Impossible'+ error.status);
      

    },
     });


  }
   

}
