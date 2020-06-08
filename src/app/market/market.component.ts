import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from '../commande/commande';
import { DialogcommandeComponent } from '../dialogcommande/dialogcommande.component';


@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {

  name:any;
  fruit:any;

  constructor(public dialog: MatDialog) { }

  

  ngOnInit() {
  }

  onSubmitNewCommand(){

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogcommandeComponent, {
      width: '250px',
      data: {name: this.name, animal: this.fruit}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.name = result;
    });
  }

}
