import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  month: string;
 
}
const ELEMENT_DATA: PeriodicElement[] = [
  { month: 'April'},{ month: 'May'},{ month: 'June'},{ month: 'June'},
  { month: 'July'},{ month: 'August'},{ month: 'September'},{ month: 'October'},
  { month: 'November'},{ month: 'December'},{ month: 'January'},{ month: 'February'},{ month: 'March'}
];
 
@Component({
  selector: 'app-update-goals',
  templateUrl: './update-goals.component.html',
  styleUrls: ['./update-goals.component.css']
})
export class UpdateGoalsComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['month',"prospects","leads","customers","revenues"];
  
  dataSource = ELEMENT_DATA;
  ngOnInit(): void {
  }
  onSave()
  {

  }
}
