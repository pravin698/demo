import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-contactinfocompanypopup',
  templateUrl: './contactinfocompanypopup.component.html',
  styleUrls: ['./contactinfocompanypopup.component.css']
})
export class ContactinfocompanypopupComponent implements OnInit {
  local_data: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data:  any,public dialog: MatDialog,
  public dialogRef: MatDialogRef<ContactinfocompanypopupComponent>) { }

  ngOnInit(): void {
    console.log(this.data)
  }
  save(){
    this.local_data= {...this.data}
    this.dialogRef.close({event:'close',companyData:this.local_data});
  }
}
