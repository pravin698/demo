import { Component, OnInit } from '@angular/core';
import { Summary } from 'src/app/Modules/summary';
import { ContactImports } from 'src/app/shared/models/contact-import';
import { DataService } from 'src/app/shared/services/data.service';
import { ContactImportsDetails } from 'src/app/shared/models/contact-import-details';
import { catchError, count } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ImportcontactComponent } from '../importcontact/importcontact.component';
import { Router } from '@angular/router';
import { ExportService } from 'src/app/shared/services/excel.service';

@Component({
  selector: 'app-contact-result-summary',
  templateUrl: './contact-result-summary.component.html',
  styleUrls: ['./contact-result-summary.component.css']
})
export class ContactResultSummaryComponent implements OnInit {

  // private importdatacompoenetuse: ImportcontactComponent;
  filenameofsummary :any;
  ImportedFileDatacount:any;
  importedfiledetail:any = {};
  goodcontacts:any;
  // inputparamforsummary:any={}
  created_by:any = 1;
  time: any;
  constructor(private dataService: DataService, private _snackBar: MatSnackBar,private router: Router,
    private exportService: ExportService) { }

  ngOnInit(): void {
    this.getimportcontactresultsummarydata();
  }

  getimportcontactresultsummarydata() {
    //get file name and total count 
    this.dataService.getfilename(this.created_by).subscribe((data) => {
    if(data){ 
      this.importedfiledetail = data.data;
      this.filenameofsummary = this.importedfiledetail[0].file_name;
    }
    this.dataService.getTotalcountgoodcontactofrecord(this.created_by).subscribe((data) => {
      if(data){ 
     this.ImportedFileDatacount = data.data[0].count;
     this.goodcontacts = data.goodcount[0].count;
      }
     });
     this.dataService.getcontacttypecount(this.created_by).subscribe((data) => {
      if(data){ 
   // this.goodcontacts = data.data;

      }
     });
   });
   
   
}

onPreviousImport(){
  this.router.navigate(['/contacts/ContactsImportHistory']);
}

exceldata() {
  // console.log(this.jsonData);
  //const numSelected = this.selection.selected;   //get selected data through checkbox
  // const downld = this.dataSource.data;
  // this.ImportedFileDatacount = data.data[0]
  console.log(this.ImportedFileDatacount);
  if (this.ImportedFileDatacount) {
    this.exportService.exportExcel(this.ImportedFileDatacount , 'contactscsv');
  }
}

}
