import { Component, OnInit, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

  import { from } from 'rxjs';
@Component({
  selector: 'app-open-description-modal',
  templateUrl: './open-description-modal.component.html',
  styleUrls: ['./open-description-modal.component.css']
})
export class OpenDescriptionModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:  any,public dialog: MatDialog,
  public dialogRef: MatDialogRef<OpenDescriptionModalComponent>) { }

  local_data:any;
  ngOnInit(): void {
    console.log(this.data)
  }

  // @Output() onSaveOrUpdate = new EventEmitter();


  // onUpdate(item: any) {
  //   // update and emit an event.
  //   this.onSaveOrUpdate.emit(item);
  //    console.log(item);
  // }
 
/**
* This is the close() function
* @returns returns void
*/

  close() {
this.local_data= {...this.data}
    this.dialogRef.close({event:'close',result:this.local_data});
  }

} 
