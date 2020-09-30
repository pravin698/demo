import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactsimporthistory',
  templateUrl: './contactsimporthistory.component.html',
  styleUrls: ['./contactsimporthistory.component.css']
})
export class ContactsimporthistoryComponent implements OnInit {
  displayedColumns: string[] = ['importeddate', 'totalcontacts', 'goodcontacts', 'importedby','remarks'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}

export interface PeriodicElement {
  importeddate:string;
  totalcontacts: number;
  goodcontacts: number;
  importedby: string;
  remarks: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {totalcontacts: 9500, importeddate: '25/07/2020', goodcontacts: 9500, importedby: 'Shwetha Sankar',remarks:'Data for webinar apps Campaign conducted by Google'},
  {totalcontacts: 9500, importeddate: '25/07/2020', goodcontacts: 9500, importedby: 'Shwetha Sankar',remarks:'Data for webinar apps Campaign conducted by Google'},
  {totalcontacts: 9500, importeddate: '25/07/2020', goodcontacts: 9500, importedby: 'Shwetha Sankar',remarks:'Data for webinar apps Campaign conducted by Google'},
  {totalcontacts: 9500, importeddate: '25/07/2020', goodcontacts: 9500, importedby: 'Shwetha Sankar',remarks:'Data for webinar apps Campaign conducted by Google'},
 
];
