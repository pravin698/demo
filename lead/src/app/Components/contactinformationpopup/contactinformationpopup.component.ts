import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-contactinformationpopup',
  templateUrl: './contactinformationpopup.component.html',
  styleUrls: ['./contactinformationpopup.component.css']
})
export class ContactinformationpopupComponent implements OnInit {
  local_data:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data:  any,public dialog: MatDialog,
  public dialogRef: MatDialogRef<ContactinformationpopupComponent>) { }

  ngOnInit(): void {
    console.log(this.data)
  }
  save(){
      this.local_data= {...this.data}
      this.dialogRef.close({event:'close',result:this.local_data});
       
  }
}
