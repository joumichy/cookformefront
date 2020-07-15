import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UserInfo } from '../userclass/userinfo';
import { HistoryCommmands } from '../commande/historycommands';

@Component({
  selector: 'app-historique-commande',
  templateUrl: './historique-commande.component.html',
  styleUrls: ['./historique-commande.component.css']
})
export class HistoriqueCommandeComponent implements OnInit {

  constructor(public dialog: MatDialog,private http: HttpClient,private activatedRoute: ActivatedRoute) { }


  //api : string  = environment.apiUrl;
  api : string  = environment.apiUrl;
  urlGetUserCommand : string = 'commands/';
  infoUser :UserInfo;
  httpOptions : any
  marketCommands : HistoryCommmands[]
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
      this.getAllCommands();
      
  


   
    
    
  }


  getAllCommands(){

    
    let url : string = this.api + this.urlGetUserCommand;
    console.log("HTTP OPTION : ")
  
    this.http.get<HistoryCommmands>(url,this.httpOptions).subscribe({
           
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
