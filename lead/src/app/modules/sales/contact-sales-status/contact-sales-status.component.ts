import { Component, OnInit, Input } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';

import { ViewEncapsulation } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { ContactSalesStatus } from 'src/app/shared/models/contactsalesstatus';
import { Router } from '@angular/router';
import { OpenDescriptionModalComponent } from 'src/app/Components/open-description-modal/open-description-modal.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-contact-sales-status',
  templateUrl: './contact-sales-status.component.html',
  styleUrls: ['./contact-sales-status.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContactSalesStatusComponent implements OnInit {
  displayedColumns: string[] = ['name', 'description'];

  ContactSalesStatusList: Array<ContactSalesStatus>;
//  dataSource = this.ContactSalesStatusList;
  dialogValue: string;
  router: Router;
  update: DataService;
  dataSource: MatTableDataSource<ContactSalesStatus>;
  constructor(public dialog: MatDialog,
    private dataService: DataService,) { }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }
  result: any;
  ngOnInit(): void {
    this.getAllContactSalesStatus();
  }

  /**
* This is the customFilterPredicate() function
* @returns returns myFilterPredicate
*/

  customFilterPredicate() {
    const myFilterPredicate = function (data: ContactSalesStatus, filter: string): boolean {
      let searchTerms=JSON.parse(filter);
      // let topFilter=searchTerms.topFilter;
      // if(topFilter)
      // {
        return data.name.toLowerCase().indexOf(searchTerms.name) !== -1
        || data.description.toLowerCase().indexOf(searchTerms.name) !== -1
        
      // }
       
    }
    return myFilterPredicate;
  }

  /**
* This is the applyFilter() function
* @param filterValue This is the filterValue parameter
* @returns returns void
*/
  applyFilter(filterValue: string) {
    //this.topFilter=true;
     const filterValues = {
       name:filterValue,
       description: filterValue,
      
     }
     this.dataSource.data.forEach(element => {
      for (const key in element) {
        if (!element[key] || element[key] === null) {
          element[key] = '';
        }
      }
    });
    this.dataSource.filter = JSON.stringify(filterValues);
    //this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /**
* This is the getAllContactSalesStatus() function
* @returns returns void
*/
  getAllContactSalesStatus() {
    debugger;
    this.dataService.getAllContactSalesList().subscribe((data) => {
      if (data) {
       // this.ContactSalesStatusList = data.data;
       this.dataSource = new MatTableDataSource(data.data);
       this.dataSource.filterPredicate = this.customFilterPredicate();
        console.log(data);
        console.log(this.ContactSalesStatusList);
      }

    });
  }

  removeEmployee(tr) {
    // console.log(tr.lm_sales_status_id);

  }

  /**
* This is the openDialog() function
* @param element This is the element parameter
* @returns returns void
*/
  openDialog(element) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.hasBackdrop = false;
    const desc = element.description;
    console.log(element.description);
    console.log(element.lm_sales_status_id);
    const id = element.lm_sales_status_id;
    dialogConfig.data = { desc, id };
    const dialogRef = this.dialog.open(OpenDescriptionModalComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(value => {
      // console.log(value.result);
      // const update_id = value.result.id;
      // const update_desc = value.result.desc;

      //   if (value.result) {
      //     console.log(value.result);
      //     this.router.navigateByUrl('/lmcontactstatus');
      //   } else {
      //     console.log("error");
      //   }
      // }, error => {
      //   console.log("error");

      // if (value.result) {
      //   // this.router.navigateByUrl('/lmcontactstatus');
      //   this.dataSource = this.dataSource.filter((value) => {
      //     if (element.lm_sales_status_id == value.result.id) 
      //       {
      //       element.description = value.result.desc; 
      //     }
      //     return true;
      //   });
      // }



// WORKING PROPERLY BY OMKAR PRAVIN AND TEJASWI
        const ContactSalesStatus = {} as ContactSalesStatus;
        ContactSalesStatus.lm_sales_status_id = value.result.id;
        ContactSalesStatus.description = value.result.desc;
     
       if(element.lm_sales_status_id == value.result.id)
       {
        this.dataService.updateSales(ContactSalesStatus).subscribe(value => {
          this.getAllContactSalesStatus();
          console.log(value.result);
          if (value.result) {
            console.log(value.result);
            element.description == value.result.desc;
            this.getAllContactSalesStatus();
            // this.router.navigateByUrl('/lmcontactstatus');
            
          } else {
            console.log("error");
          }
        }, error => {
          console.log("error");
        });
       }


      //edited by pravin
      // const ContactSalesStatus = {} as ContactSalesStatus;
      //   ContactSalesStatus.description = value.result.desc;
      // if (element.lm_sales_status_id == value.result.id) {
      //   this.dataService.updateSales().subscribe(value => {
      //     console.log(value.result);
      //     if (value.result) {
      //       element.description == value.result.desc

      //     } else {
      //       console.log("error");
      //     }
      //   }, error => {
      //     console.log("error");
      //   });
      // }


    }

    );
  }
  //   onUpdate()
  //   {
  //     const dialogConfig = new MatDialogConfig();

  //   let dialogRef = this.dialog.open(OpenDescriptionModalComponent, dialogConfig);
  //   dialogRef.afterClosed().subscribe(value => {
  //     console.log(`Dialog sent: ${value}`); 
  //   });
  // }



}


export interface PeriodicElement {
  name: string;
  description: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'JEE', description: 'Data for webinar apps Campaign conducted by Google' },
  { name: 'CET', description: 'Data for webinar apps Campaign conducted by Google' },
  { name: 'CAT', description: 'Data for webinar apps Campaign conducted by Google' },
  { name: 'JEE', description: 'Data for webinar apps Campaign conducted by Google' }

];

