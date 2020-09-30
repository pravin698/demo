import { Component, OnInit, Input, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DataService } from 'src/app/shared/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { Contacts } from 'src/app/shared/models/contacts';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ContactinformationpopupComponent } from 'src/app/Components/contactinformationpopup/contactinformationpopup.component';
import { ContactinfocompanypopupComponent } from 'src/app/Components/contactinfocompanypopup/contactinfocompanypopup.component';
import { RouterModule, RouterLink, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Company } from 'src/app/shared/models/company';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-contactinformation',
  templateUrl: './contactinformation.component.html',
  styleUrls: ['./contactinformation.component.css'],
  // encapsulation: ViewEncapsulation.None,
})
export class ContactinformationComponent {
  checked: boolean;
  show: MatProgressBarModule;
  lm_contact_id: number;
  id: any;
  firstName: string;
  emailName: any;
  designation: string;
  companyid: number;
  dataSources: any;
  data: any;
  phone: any;
  lastName: any;
  linkedin: any;
  dataSourceNew: any[] = new Array();
  companyName: any;
  industry: any;
  revenue: any;
  no_of_people: any;
  noofpeople: any;
  contactid: any;
  getcurrentstatusvalue: any;
  getAllsalesStatuslist: any[];

  getcurrentsalesstatusid = new FormGroup({
    currentcontactsalesstus: new FormControl(''),
  })

  constructor(private _progressBar: MatProgressBarModule, private dataService: DataService,
    private route: ActivatedRoute, public dialog: MatDialog, private router: Router,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('value');
    this.getUserById();
    this.contactid = this.id;
    this.getAllContactSalesStatus();
  }
  displayedColumns: string[] = ['name', 'designations', 'email', 'phone'];
  //dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource<Contacts>();

  // showOptions(event) {
  //   console.log(event.checked); //true or false
  //   if (event.checked ) {
  //     this.show = this._progressBar;
  //   }
  //   else {
  //     this.show = false;
  //   }
  // }
//added by shoeb 
onAddNotes(){
  this.router.navigate(['/AddNotes']);
}

  Onchangestatus(event) {
  
    this.getcurrentstatusvalue = this.getcurrentsalesstatusid.controls["currentcontactsalesstus"].value;
    this.dataService.setcontactconvertfromsalesstatus(this.getcurrentstatusvalue);
  }
  //popup for contact information table
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.hasBackdrop = false;
    let id = this.id;
    let owner = this.firstName;
    let emailName = this.emailName;
    let phone = this.phone;
    let firstName = this.firstName;
    let lastName = this.lastName;
    let linkedin = this.linkedin;
    let designation = this.designation;
    console.log("ID for popup ", this.id, this.firstName, this.emailName);
    dialogConfig.data = { id, owner, emailName, phone, firstName, lastName, linkedin, designation };
    const dialogRef = this.dialog.open(ContactinformationpopupComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(value => {
      const Contacts = {} as Contacts;
      Contacts.lm_contact_id = value.result.id;
      Contacts.email_id = value.result.emailName;
      Contacts.phone_no = value.result.phone;
      Contacts.first_name = value.result.firstName;
      Contacts.last_name = value.result.lastName;
      Contacts.linkedin_url = value.result.linkedin;
      Contacts.designation = value.result.designation;
   
      if (this.lm_contact_id == value.result.id) {
        this.dataService.updateContactnformation(Contacts).subscribe(value => {
          this.getUserById();
        });
      }
      else {
        this._snackBar.open("Data not updated for Contact Information", "", {
          duration: 4000,
        });
      }
    });
  }
  //popup for company details table
  openCompanyDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.hasBackdrop = false;
    let lm_company_id = this.dataSources.lm_company_id;
    let companyName = this.companyName;
    let industry = this.industry;
    let revenue = this.revenue;
    let noofpeople = this.noofpeople;

    dialogConfig.data = { lm_company_id, companyName, industry, revenue, noofpeople };
    const dialogRef = this.dialog.open(ContactinfocompanypopupComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(value => {
      const Company = {} as Company;
      Company.lm_company_id = value.companyData.lm_company_id;
      Company.name = value.companyData.companyName;
      Company.industry = value.companyData.industry;
      Company.revenue = value.companyData.revenue;

      if (this.companyid == value.companyData.lm_company_id) {
        this.dataService.updateCompanyInformation(Company).subscribe(value => {
          this.getUserById();
        });
      }
      else {
        this._snackBar.open("Data not updated for Company Details", "", {
          duration: 4000,
        });
      }
    });
  }
  getUserById() {

    if (this.id) {
      this.dataService.getById(this.id).subscribe((data) => {
        if (data) {
          this.dataSources = data.data;
          this.firstName = this.dataSources.first_name;
          this.emailName = this.dataSources.email_id;
          this.phone = this.dataSources.phone_no;
          this.firstName = this.dataSources.first_name;
          this.lastName = this.dataSources.last_name;
          this.linkedin = this.dataSources.linkedin_url;
          this.designation = this.dataSources.designation;
          this.companyid = this.dataSources.company_id;
          this.lm_contact_id = this.dataSources.lm_contact_id;
        }
        else {
          this._snackBar.open("Data not found for Contact Information", "", {
            duration: 4000,
          });
        }

        this.dataService.getByCompanyId(this.companyid).subscribe((data) => {
          if (data) {
            this.dataSources = data.data;
            this.companyName = this.dataSources.name;
            this.industry = this.dataSources.industry;
            this.revenue = this.dataSources.revenue;
            this.no_of_people = this.dataSources.no_of_people;
          }
          else {
            this._snackBar.open("Data not found for Company Details", "", {
              duration: 4000,
            });
          }
        });

        this.dataService.getCompanyCount(this.companyid).subscribe((data) => {
          if (data) {
            this.noofpeople = data.data;
          }
          else {
            this._snackBar.open("No. of People not found for Company Details", "", {
              duration: 4000,
            });
          }
        });
      });
    }
  }
  //fetch dropdown data
  getAllContactSalesStatus() {
    this.dataService.getAllContactSalesList().subscribe((data) => {

      if (data) {
        this.getAllsalesStatuslist = data.data;
      }
      else {
        this._snackBar.open("Bad Request ,Data Not Found for Sales Status Name", "", {
          duration: 4000,
        })
      }
    })
  }
}

