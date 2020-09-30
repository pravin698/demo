import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { UpdateGoalsComponent } from '../update-goals/update-goals.component';

export interface PeriodicElement {
  name: string;
  designation: number;
  email: number;
  phone: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { name: '# of prospects', designation: 200, email: 150, phone: 160 },
  { name: '# of leads', designation: 50, email: 23, phone: 20 },
  { name: '# of customers', designation: 10, email: 5, phone: 6 },
  { name: 'Revenue (in 1000$)', designation: 3000, email: 1500, phone: 2000},
  { name: 'Margin (in 1000$)', designation: 1500, email: 700, phone: 745 },
  { name: 'Potential Commission (in 1000$)', designation: 50, email: 40, phone: 45 },

];

export interface PeriodicElements {
  taskname: string;
  assignedto: string;
  description: string;
  duedate: string;
}
const ELEMENT_DATAS: PeriodicElements[] = [
  { taskname: 'Follow-up', assignedto: 'Sujit C', description: 'Send a follow-up email &update everyone', duedate: '16/05/2020' },
  { taskname: 'Follow-up', assignedto: 'Rahul M', description: 'Send a follow-up email &update everyone', duedate: '19/06/2020' },
];
@Component({
  selector: 'app-my-goals',
  templateUrl: './my-goals.component.html',
  styleUrls: ['./my-goals.component.css']
})
export class MyGoalsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['name', 'designation', 'email', 'phone'];
  dataSource = ELEMENT_DATA;

  displayedColumn: string[] = ['taskname', 'assignedto', 'description', 'duedate'];
  dataSources = ELEMENT_DATAS;
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.hasBackdrop = false;
    dialogConfig.data = {};
    const dialogRef = this.dialog.open(UpdateGoalsComponent, dialogConfig);
    
  }
}
