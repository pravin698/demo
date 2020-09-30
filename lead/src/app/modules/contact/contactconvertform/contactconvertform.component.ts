import { Component, OnInit, Input, Output } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ContactsSalesStatusHistorymodel } from 'src/app/shared/models/ContactsSalesStatusHistorymodel';
import { Contacts } from 'src/app/shared/models/contacts';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-contactconvertform',
  templateUrl: './contactconvertform.component.html',
  styleUrls: ['./contactconvertform.component.css']
})
export class ContactconvertformComponent implements OnInit {
  salesId:any
  id: any;
  getcontactinfo: any;
  firstName: any;
  emailName: any;
  phone: any;
  linkedin: any;
  lastName: any;
  salesstatusid: any;
  getnames:Array<any>=[];
  getAllsalesStatuslist:any[];

  Contacts_salesstatushistorymodel = {} as ContactsSalesStatusHistorymodel;
  Contacts = {} as Contacts;

  getscreendataforcontactconvertform = new FormGroup({
      currentstatusvalue:new FormControl(''),
    updatestatusvalue: new FormControl(''),
    notesvalue: new FormControl(''),
  })
  statusname: any;
  converttosales_status_id: Object[];
  converttostatusid: any;
  convertstatusname: any;

  constructor(private _progressBar: MatProgressBarModule, private dataService: DataService, private route: ActivatedRoute, private router: Router,   private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('value');
    this.getcontactdetails();
    this.salesstatusid;
    this.getAllContactSalesStatus();
    this.converttosales_status_id = this.dataService.getcontactconvertfromsalesstatus();
    this.converttostatusid = this.converttosales_status_id[0];
    this.getscreendataforcontactconvertform.controls['updatestatusvalue'].setValue(this.converttostatusid);
    this.getscreendataforcontactconvertform.controls['currentstatusvalue'].setValue(this.salesstatusid);
  }



  onSave(event) {
    
try{
  this.Contacts_salesstatushistorymodel.lm_from_sales_status_id = this.salesstatusid;
  this.Contacts_salesstatushistorymodel.lm_to_sales_status =  this.getscreendataforcontactconvertform.controls['updatestatusvalue'].value;
  this.Contacts_salesstatushistorymodel.comments = this.getscreendataforcontactconvertform.controls["notesvalue"].value;
  this.Contacts_salesstatushistorymodel.lm_contact_id = this.getcontactinfo.lm_contact_id;
  this.Contacts_salesstatushistorymodel.ddo_client_id = this.getcontactinfo.ddo_client_id;
  this.Contacts_salesstatushistorymodel.ddo_org_id = this.getcontactinfo.ddo_org_id;
  this.Contacts_salesstatushistorymodel.isactive = this.getcontactinfo.isactive;
  this.Contacts_salesstatushistorymodel.created_by = this.getcontactinfo.created_by;
  this.Contacts_salesstatushistorymodel.updated_by = this.getcontactinfo.updated_by;
  this.dataService.insertintoslaesstatushistory(this.Contacts_salesstatushistorymodel).subscribe(data => {
    console.log(data);
  })
  var salesstatusandcontactid = {
    lm_sales_status_id: this.Contacts_salesstatushistorymodel.lm_to_sales_status,
    lm_contact_id: this.Contacts_salesstatushistorymodel.lm_contact_id
  }
  this.dataService.updateSalesstausidforcontact(salesstatusandcontactid).subscribe(data => {
    console.log(data);
  })
  this._snackBar.open("Contact Sales Status Updated Sucessfully ","",{
    duration: 4000,
  })
  this.router.navigateByUrl('/contacts/Contacts');

}
catch(err){
  console.log(err);
  this._snackBar.open("Bad Request ,Data Not Inserted Convert Sales Status ","",{
    duration: 4000,
  })
}

}

  Oncancel(event) {
    this.getscreendataforcontactconvertform.reset();
    this.salesstatusid = null;
    this.router.navigateByUrl('/contacts/Contacts');
  }

  getcontactdetails() {
    try{
      this.dataService.getdatabyid(this.id).subscribe((data) => {
        if (data) {
          this.getcontactinfo = data.data;
          this.firstName = this.getcontactinfo.first_name;
          this.emailName = this.getcontactinfo.email_id;
          this.phone = this.getcontactinfo.phone_no;
          this.lastName = this.getcontactinfo.last_name;
          this.linkedin = this.getcontactinfo.linkedin_url;
          this.salesstatusid = this.getcontactinfo.sales_status_id;
        }
     })
      this.salesstatusid;
    }
    catch(err){
      this._snackBar.open("Bad Request ,Data Not Found for Contact Information ","",{
        duration: 4000,
      })
    }

  }


  getAllContactSalesStatus() {
    debugger;
    try{
    this.dataService.getAllContactSalesList().subscribe((data) => {
      if (data) {
        this.getAllsalesStatuslist = data.data;
        
      }//for current sales status
      for (var salesstatusarr of this.getAllsalesStatuslist){
        this.salesId=  salesstatusarr.lm_sales_status_id;
        if(this.salesstatusid == this.salesId )
        {
           this.statusname = salesstatusarr.name;
           
       }
       if(this.converttostatusid == this.salesId)
       {
         this.convertstatusname = salesstatusarr.name
        }
       else{
         
       }
      }
      
    })
  }
  catch(err){
    this._snackBar.open("Bad Request ,Data Not Found for Cureent Sales Status ","",{
      duration: 4000,
    })
  }
  }

}
