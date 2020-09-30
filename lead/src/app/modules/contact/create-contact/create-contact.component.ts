import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators, ValidatorFn, ValidationErrors, NgModel, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Contacts } from 'src/app/shared/models/contacts';
import { DataService } from 'src/app/shared/services/data.service';
import { CreateContactModel } from 'src/app/shared/models/create-contact-model';
import { SalesStatus } from 'src/app/shared/models/sales-status';
import { ProductService } from 'src/app/shared/models/product-service';
import { ContactOfferings } from 'src/app/shared/models/contact-offerings';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CreateContactComponent implements OnInit {
  createContact: FormGroup;
  submitted = false;
  //contacts : Contacts;
  isVisible = false;
  status: SalesStatus[];
  Product: ProductService[];
  Contacts = {} as Contacts;
  ContactOfferings = {} as ContactOfferings;
  CreateContactModel : CreateContactModel;
  firstNamePattern = "/^[a-zA-Z]+ [a-zA-Z]+$/";
  mobilePattern="^((\\+91-?)|0)?[0-9]{10}$";
  emailPattern = "[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}";
  //linkedinPattern="^https:\\/\\/[a-z]{2,3}\\.linkedin\\.com\\/.*$";
  linkedinPattern="^https?://((www|\w\w)\.)?linkedin.com/((in/[^/]+/?)|(pub/[^/]+/((\w|\d)+/?){3}))$";//https://www.linkedin.com/in/omkar
  // skypePattern="^[a-z][a-z0-9\.,\-_]{5,31}$/i";
  skypePattern="\s*(?<account>(\w|\.)*)"
  UserList: Contacts[] = [];

  constructor(private Fb: FormBuilder, public router: Router, private create: DataService) {


  }

  ngOnInit(): void {

this.getStatus();
this.getProduct();
    this.createContact = this.Fb.group({
      lm_contact_id: ['', Validators.required],
      // first_name: ['', Validators.required],
      first_name:  new FormControl('', [Validators.pattern('^[a-zA-Z ]*$')]),
      // last_name: ['', Validators.required],
      last_name:  new FormControl('', [Validators.pattern('^[a-zA-Z ]*$')]),
      organisation: ['', Validators.required],
      contactStatus: ['', Validators.required],
      prdService: [''],
      designation: [''],
      skype_id: [''],
      alt_phone_no: [''],
      alt_email_id: [''],
      address: [''],
      city: [''],
      state: [''],
      country: [''],
      postal_code: [''],
      description: [''],
      phone_no: [''],
        email_id: [''],
        linkedin_url: [''],
      child: this.Fb.group({
        phone_no: [''],
        email_id: [''],
        linkedin_url: ['']
      },{ validators: this.atLeastOneValidator })
    });
  }

  /**
* This is the atLeastOneValidator validation function
* @param control This is the control parameter of formgroup
* @returns returns atLeastOneRequired variable
*/

  public atLeastOneValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {

    let controls = control.controls;
    console.log(controls);
    if (controls) {
      let theOne = Object.keys(controls).findIndex(key => controls[key].value !== '');
      if (theOne === -1) {
        return {
          atLeastOneRequired: {
            text: 'i: One among these are mandatory( mobile no, email ID or LinkedIn URL)'
          }
        }
      }
    };
  }

   /**
* This is the getAllUser function
* @returns returns void
*/

  getAllUser() {
    this.create.getAll().subscribe((data) => {
      if (data) {
        this.UserList = data.data;

      }

    });
  }

/**
* This is the phoneExists() function
* @param event This is the event parameter
* @returns returns void
*/

  phoneExists($event)
  {

    let phoneno = $event.target.value;
    if (this.UserList.filter(x => x.phone_no == phoneno).length >= 1) {
      alert("phone already exists");
    }


  }

  /**
* This is the emailExists() function
* @param event This is the event parameter
* @returns returns void
*/

  emailExists($event)
  {

    let emailId=$event.target.value;
    if(this.UserList.filter(x=>x.email_id==emailId).length>=1)
    {
      alert("email is already exists");
    }

  }


  /**
* This is the linkedInExists() function
* @param event This is the event parameter
* @returns returns void
*/

  linkedInExists($event)
  {

    let linkedIn=$event.target.value;
    if(this.UserList.filter(x=>x.linkedin_url==linkedIn).length>=1)
    {
      alert("linkedIn url already exists");
    }

  }

  /**
* This is the skypeExists() function
* @param event This is the event parameter
* @returns returns void
*/

  skypeExists($event) {

    let skypeId = $event.target.value;
    if (this.UserList.filter(x => x.skype_id == skypeId).length >= 1) {
      alert("skype id already exists");
    }

  }

   /**
* This is the onReset() function
* @returns returns void
*/

  onReset() {
    this.createContact.reset();
     this.submitted = false;
   
  }
  onPreview() {

  }

  /**
* This is the getStatus() function
* @returns returns void
*/
  getStatus() {
    this.create.getSaleStatus().subscribe((data) => {
      if (data) {
        this.status=data.data;
        console.log("fetched");
      }
      
    });
  }
  /**
* This is the getProduct() function
* @returns returns void
*/
  getProduct() {
    this.create.getProductService().subscribe((data) => {
      if (data) {
        this.Product=data.data;
        console.log("fetched");
      }
      
    });
  }

  /**
* This is the onSave() function
* @param formData This is the formData parameter
* @returns returns void
*/

  onSave(formData: any): void {
    //const CreateContactModel = {} as CreateContactModel;
    const Contacts = {} as Contacts;

    this.Contacts.owner_id = this.createContact.controls.lm_contact_id.value;
    this.Contacts.first_name = this.createContact.controls.first_name.value;
    this.Contacts.last_name = this.createContact.controls.last_name.value;
    this.Contacts.email_id=this.createContact['controls'].child['controls'].email_id.value;
    if(this.createContact['controls'].child['controls'].phone_no.value=="")
    {
      this.Contacts.phone_no=null;
    }
    else{
      this.Contacts.phone_no=this.createContact['controls'].child['controls'].phone_no.value;
    }
    
    this.Contacts.linkedin_url=this.createContact['controls'].child['controls'].linkedin_url.value;
    this.Contacts.designation = this.createContact.controls.designation.value;
    this.Contacts.company_id = this.createContact.controls.organisation.value;
    this.Contacts.skype_id = this.createContact.controls.skype_id.value;
    if(this.createContact.controls.alt_phone_no.value=="")
    {
      this.Contacts.alt_phone_no=null;
    }
    else
    {
      this.Contacts.alt_phone_no = this.createContact.controls.alt_phone_no.value;
    }
    this.Contacts.alt_email_id = this.createContact.controls.alt_email_id.value;
    this.Contacts.address = this.createContact.controls.address.value;
    this.Contacts.city = this.createContact.controls.city.value;
    this.Contacts.state = this.createContact.controls.state.value;
    this.Contacts.country = this.createContact.controls.country.value;
    this.Contacts.postal_code = this.createContact.controls.postal_code.value;
    this.Contacts.sales_status_id=this.createContact.controls.contactStatus.value['lm_sales_status_id'];
    this.Contacts.description = this.createContact.controls.description.value;
   // this.ContactOfferings.lm_offerings_id = this.createContact.controls.prdService.value['lm_offerings_id'];
    if (formData.status === 'VALID') {
      this.create.createContact(this.Contacts).subscribe(data => {
        console.log(data);
        if (data) {
          console.log(data);
          console.log("-------");
          console.log(data.data["lm_contact_id"]);
          
        this.ContactOfferings.lm_contact_id = data.data["lm_contact_id"];
        this.ContactOfferings.lm_offerings_id = this.createContact.controls.prdService.value['lm_offerings_id'];

        this.create.offerings(this.ContactOfferings).subscribe(data => {
          console.log(data);
        if (data) {
          console.log(data);
        }
        });
          this.router.navigateByUrl('/contacts');
        } else {
          console.log("error");
        }
      }, error => {
        console.log("error");
      });
    }
  }
}

