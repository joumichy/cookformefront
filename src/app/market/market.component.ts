import { Component, OnInit, Inject, Directive, SimpleChanges, OnChanges, Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogCommand } from '../commande/commande';
import { DialogcommandeComponent } from '../dialogcommande/dialogcommande.component';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MarketCommands } from '../commande/marketcommands';
import { ActivatedRoute } from '@angular/router';
import { UserInfo } from '../userclass/userinfo';
import { Observable } from 'rxjs';
import { Directionality } from '@angular/cdk/bidi';


@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {



 
  value : boolean = false;
  constructor(public dialog: MatDialog,private http: HttpClient,private activatedRoute: ActivatedRoute) { }

  api : string  = environment.apiUrl;
  urlGetAllCommands : string = 'commands/all';
  urlPostCommand : string = "commands/";
  datasent : any;
  sub : any;
  infoUser :UserInfo;
  httpOptions : any
  marketCommands : MarketCommands[]
  newData : any;


  request : any;
  budget : any;
  nbGuest : any ;
 
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

  ngOnChanges(changes : SimpleChanges){
    console.log(changes)

  }

  
  

  onSubmitNewCommand(){

  }

  getAllCommands(){

    
    let url : string = this.api + this.urlGetAllCommands;

  
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
   createNewCommand(data : DialogCommand ){
    
    let url : string = this.api + this.urlPostCommand;

  
    this.http.post<any>(url,data,this.httpOptions).subscribe(  data =>{
      console.log(data)

    })
 
  }
  

  pushdata(){

    this.value  = !this.value;
    this.ngOnInit();

    
  }
  

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogcommandeComponent, {
      width: '300px',
      data: {request: this.request, budget: this.budget, nbGuest : this.nbGuest }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
      let command : DialogCommand = result
      console.log(command)
      this.createNewCommand(command);

      this.ngOnInit();

     


      
      
    });
  }

}
