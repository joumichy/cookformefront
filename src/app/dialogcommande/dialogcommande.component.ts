import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../commande/commande';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialogcommande',
  templateUrl: './dialogcommande.component.html',
  styleUrls: ['./dialogcommande.component.css']
})
export class DialogcommandeComponent implements OnInit {

  request : any;
  budget : any;
  nbGuest : any;
  

  constructor(
    public dialogRef: MatDialogRef<DialogcommandeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {

    
    }

  
  sendData(){
    
    this.data.request;
    this.data.budget = this.budget
    this.data.nbGuest = this.nbGuest
    console.log(this.data.request +" "+ this.request)
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  cancel(){
    
    this.dialogRef.close();

  }

  ngOnInit() {
  }

}
