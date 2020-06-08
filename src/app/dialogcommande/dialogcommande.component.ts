import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../commande/commande';

@Component({
  selector: 'app-dialogcommande',
  templateUrl: './dialogcommande.component.html',
  styleUrls: ['./dialogcommande.component.css']
})
export class DialogcommandeComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogcommandeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
