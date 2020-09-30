import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as XLSX from 'xlsx';
import { ContactImports } from 'src/app/shared/models/contact-import';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/services/data.service';
import { ContactImportsDetails } from 'src/app/shared/models/contact-import-details';
import { Tags } from 'src/app/shared/models/tags';

import { FormGroup, FormControl } from '@angular/forms';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-importcontact',
  templateUrl: './importcontact.component.html',
  styleUrls: ['./importcontact.component.css']
})
export class ImportcontactComponent {
  uploadedFile: File;
  import_filename: any;
  nullvalue:String ="";
  // ContactImport data ;
  contacttypeforimporteddata:any;
  salesstatusforimporteddata: any;
  getAllContactTypelist:any[];
  contacttypeDND:any;
  checked = false;
  importdata: any[];
  contactdataarr: any[];

  create: any;
  ContactImports = {} as ContactImports;
  ContactImportsDetails = {} as ContactImportsDetails;
  xlsxRecord: any;
  //purpose: any;
  typename: any;
  // purpose: string;
  tags = {} as Tags;
  arr: Array<any> = [];
  //tag: any;
  tagdata: string;
  getAllsalesStatuslist: any[];
  salesId: any;
  salesstatusid: any;
  statusname: any;
  fileType: string;
  format: string;
  invalid: any = 'none';
  createdbyid:any= 1;
  //valid= true;

  fetchContacttypeandStatus = new FormGroup({
    contacttypevalue:new FormControl(''),
    salesStatusvalue:new FormControl(''),
    tag :new FormControl(''),
    tagvalues:new FormControl(''),
    purpose:new FormControl(''),
    file:new FormControl(''),
})
  timeZoneOffset: any;


  constructor(private _snackBar: MatSnackBar, private router: Router,
    private dataService: DataService ) {
     
     }


  ngOnInit(): void {
    //added by shoeb
    this.getAllcontacttypes();
    this.getAllContactSalesStatus();
    this.invalid =false; 
  }
  //added by shoeb for contacttype dropdown
  getAllcontacttypes() {

    this.dataService.getAllContactTypeList().subscribe((data) => {
      try {
        this.getAllContactTypelist = data.data;


      }
      catch (err) {

      }

    })
  }

  OnchangeContacttype(value) {
    value;
    // if(value == "UnSubscribe" || value == "Competetor" ){
    //   
    // }
    // else{
    //   this.checked = false;
    // }
    // this.typename =  value

    for (var checkisDND of this.getAllContactTypelist) {

      let typeid = checkisDND.lm_contact_type_id;
      this.contacttypeDND = checkisDND.isdnd;
      //const vlaueofDND = this.contacttypeDND.find(element => element = 'Y')
      if (value == typeid && this.contacttypeDND == 'Y') {
        this.checked = true;
        this.typename = checkisDND.name;
        break;
      } else {
        this.checked = false;

      }

    }

  }
  //tagname=this.tag;
  /**
* This is the readFile() function
* @param fileEvent This is the fileEvent parameter
* @returns returns void
*/

  // save data in tags table
  iconclick() {
    this.tags.name = this.fetchContacttypeandStatus.controls['tag'].value;
     this.nullvalue= this.fetchContacttypeandStatus.controls['tag'].value ;
    this.nullvalue="";
    this.arr.push(this.tags.name);
    console.log(this.arr);
    this.tagdata = this.arr.toLocaleString();
   this.fetchContacttypeandStatus.controls['tagvalues'].setValue(this.tagdata);

    this.dataService.inserttags(this.tags).subscribe(data => {
      console.log(data);
    })

  }

  readFile(fileEvent: any) {
    let file = fileEvent.target.files[0];
    this.import_filename = file.name;
    this.fetchContacttypeandStatus.controls['file'].value;
    this.fileType = (this.fetchContacttypeandStatus.controls['file'].value).split('.')[1];
   
    if (!(this.fileType == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
    this.fileType == 'application/vnd.ms-excel'  || this.fileType == 'text/csv'  || this.fileType == 'csv'
    || this.fileType == 'xlsx'|| this.fileType == 'xls')) {
   
        this.invalid = "Invalid Format" ;
        this.fetchContacttypeandStatus.controls['file'].setValue('');
        this.uploadedFile = null;
        return false;
    }else{
      //this.valid ="Valid Format"
      this.invalid = "Valid Format";
    }

    const target: DataTransfer = <DataTransfer>(fileEvent.target);
    if (target.files.length > 1) throw new Error('cannot use multiple files')
    const reader: FileReader = new FileReader();
    let rawObject: any;
    let jsonObject;
    reader.onload = (e: any) => {
      const binaryString: String = e.target.result;
      const workBook: XLSX.WorkBook = XLSX.read(binaryString, { type: 'array' });
      // const sheetName: string = workBook.SheetNames[0];
      const sheet = workBook.SheetNames[0];
      rawObject = XLSX.utils.sheet_to_json(
        workBook.Sheets[sheet]
      );
      // console.log(workSheet);
      // this.data = (XLSX.utils.sheet_to_json(workSheet , {header: 1}));
      // console.log(this.data);

      // workBook.SheetNames.forEach(sheets => {
      //    rawObject = XLSX.utils.sheet_to_json(
      //       workBook.Sheets[sheets]
      //   );

      // let jsonObject = JSON.stringify(rawObject);
      let jsonObject = rawObject;
      // callback(jsonObject);
      console.log(jsonObject)
      this.xlsxRecord = jsonObject;
      // })
      this.fetchContacttypeandStatus.controls['file'].setValue(this.import_filename);
    }
    // reader.readAsBinaryString(target.files[0]);
    reader.readAsArrayBuffer(target.files[0]);

  }

  /**
* This is the onImport() function
* @returns returns void
*/

  onImport(event) {
    const ContactImports = {} as ContactImports;
    
    
    // this.ContactImports.file_name = this.file;
    // this.ContactImports.purpose = this.purpose;
    this.contacttypeforimporteddata = this.fetchContacttypeandStatus.controls["contacttypevalue"].value;
    this.salesstatusforimporteddata = this.fetchContacttypeandStatus.controls["salesStatusvalue"].value;
    this.ContactImports.salesstatustype = this.salesstatusforimporteddata;
    this.ContactImports.contacttype = this.contacttypeforimporteddata;
    this.ContactImports.array_data = this.xlsxRecord;
    this.ContactImports.file_name =  this.import_filename;
    this.ContactImports.purpose = this.fetchContacttypeandStatus.controls['purpose'].value;
    this.ContactImports.created_by = this.createdbyid;
    try {
      this.dataService.onImportContact(this.ContactImports).subscribe(importFile => {
        console.log(importFile.lm_contact_imports_id);
        this.importdata = importFile;
        this.ContactImports.lm_contact_imports_id = importFile.data.lm_contact_imports_id;
        this.dataService.createNewContact(this.ContactImports).subscribe(contactData => {
          this.ContactImportsDetails = contactData.totalRecord;
          console.log(contactData);
          this.ContactImportsDetails.created_by = this.createdbyid;
          this.contactdataarr = contactData
          this.dataService.createImportStatus(this.ContactImportsDetails).subscribe(importStatus => {
            this._snackBar.open("Record Added Succesfuly ", "", {
              duration: 4000,
            })
            console.log(importStatus);
         })
          if (this.importdata && this.contactdataarr) {
           // this.dataService.setinput();
            this.router.navigate(['/contacts/importSummary']);   
          }
        })
      })
      
    }
    catch (err) {
      this._snackBar.open("Bad Request ,Data Not Found ", "", {
        duration: 4000,
      })
    }
    

    // this.dataService.onImportContact(this.ContactImports).subscribe(data => {
    //   console.log(data);
    // })


  }
  //download template
  excelHeaders:string[] = ["first_name","last_name","email_id","phone_no","company_id","designation","alt_phone_no","skype_id","alt_email_id","linkedin_url","postal_code","country","state","city","address","description"];
templateToExcel:string[][] = [this.excelHeaders,[]];
  exportTemplateAsExcel()
  {
    const ws: XLSX.WorkSheet=XLSX.utils.aoa_to_sheet(this.templateToExcel);
const wb: XLSX.WorkBook = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
XLSX.writeFile(wb,"template"+".xlsx");
  }

  getAllContactSalesStatus() {
    try {
      this.dataService.getAllContactSalesList().subscribe((data) => {
        if (data) {
          this.getAllsalesStatuslist = data.data;
        }
        for (var salesstatusarr of this.getAllsalesStatuslist) {
          this.salesId = salesstatusarr.lm_sales_status_id;
          if (this.salesstatusid == this.salesId) {
            this.statusname = salesstatusarr.name;
          }
          else {

          }
        }
      })
    }
    catch (err) {
      this._snackBar.open("Bad Request ,Data Not Found for Cureent Sales Status ", "", {
        duration: 4000,
      })
    }
  }
}
