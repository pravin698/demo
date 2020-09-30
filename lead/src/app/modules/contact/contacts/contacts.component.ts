import { Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { DataService } from 'src/app/shared/services/data.service';
import { Contacts } from 'src/app/shared/models/contacts';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  isLoading = true;
  contactcheck = false;
  citycheck = false;
  tagcheck = false;
  theCheckbox = false;
  checked = false;
  contacts: Contacts;
  selectedAll: any;
  public pageSize = 10;
  public currentPage = 0;
  //public totalSize = 0;
  public array: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ELEMENT_DATA = {} as Contacts;
  UserList: Contacts[] = [];
 // topFilter:boolean=false;
  

  filterValues = {
    name: '',
    city: '',
    state: '',
    topFilter:false
  };

  viewContact = new FormGroup({
    nameFilter: new FormControl(),
    cityFilter: new FormControl(),
    stateFilter: new FormControl(),
    nameCheck: new FormControl(),
    cityCheck: new FormControl(),
    stateCheck: new FormControl(),
     });




  displayedColumns: string[] = ['select', 'first_name', 'phone_no', 'email_id', 'company_id', 'city', 'state', 'address'];
  dataSource: MatTableDataSource<Contacts>;

  selection = new SelectionModel<Contacts>(true, []);
  data = Object.assign(this.UserList);
  lm_contact_id: any[] = new Array<any>();
  paginationlength: any;
  msg: string;


  constructor(
    private dataService: DataService, private _snackBar: MatSnackBar
  ) {
    console.log(this.data);
    this.pageSize = 10;
  }

  get nameFilter() { return this.viewContact.get('nameFilter'); }
  get cityFilter() { return this.viewContact.get('cityFilter'); }
  get stateFilter() { return this.viewContact.get('stateFilter'); }
 get nameCheck() { return this.viewContact.get('nameCheck'); }
 get cityCheck() { return this.viewContact.get('cityCheck'); }
 get stateCheck() { return this.viewContact.get('stateCheck'); }
  
 /**
* This is the customFilterPredicate() function
* @returns returns constant variable myFilterPredicate
*/


  customFilterPredicate() {
  const myFilterPredicate = function (data: Contacts, filter: string): boolean {
    let searchTerms=JSON.parse(filter);
    let topFilter=searchTerms.topFilter;
    if(topFilter)
    {
      return data.first_name.toLowerCase().indexOf(searchTerms.name) !== -1
      || data.city.toString().toLowerCase().indexOf(searchTerms.name) !== -1
      || data.state.toLowerCase().indexOf(searchTerms.name) !== -1
      || data.phone_no.toString().indexOf(searchTerms.name) !== -1
      || data.email_id.toString().indexOf(searchTerms.name) !== -1
      || data.company_id.toString().indexOf(searchTerms.name) !== -1
      || data.address.toString().indexOf(searchTerms.name) !== -1
    }
    else
    {
     
      return data.first_name.toLowerCase().indexOf(searchTerms.name) !== -1
      && data.city.toString().toLowerCase().indexOf(searchTerms.city) !== -1
      && data.state.toLowerCase().indexOf(searchTerms.state) !== -1;
    }

  }
  return myFilterPredicate;
}

/**
* This is the toggleVisibilitycontact() function
* @param e This is the event parameter of type any
* @returns returns void
*/
  toggleVisibilitycontact(e) {
    this.contactcheck = e.target.checked;
    this.nameFilter.reset();
    this.cityFilter.reset();
    this.stateFilter.reset();
    //this.checked=true;
  }

  /**
* This is the toggleVisibilitycity() function
* @param e This is the event parameter of type any
* @returns returns void
*/
  toggleVisibilitycity(e) {
    this.citycheck = e.target.checked;
  }

  /**
* This is the toggleVisibilitytag() function
* @param e This is the event parameter of type any
* @returns returns void
*/
  toggleVisibilitytag(e) { this.tagcheck = e.target.checked; }

  /**
* This is the clearFilters() function
* @returns returns void
*/
  clearFilters()
  {
    this.nameFilter.reset();
    this.nameCheck.reset();
    this.cityFilter.reset();
    this.cityCheck.reset();
    this.stateFilter.reset();
    this.stateCheck.reset();
   this.contactcheck=false; 
   this.citycheck=false;
   this.tagcheck=false;
    const filterValues = {
      name: '',
      city: '',
      state: '',
      topFilter:false
    }
    this.dataSource.filter = JSON.stringify(filterValues);
  }
  
   /**
* This is the custFilters() function
* @returns returns void
*/

  custFilters() {
   // this.topFilter=false;
    let txtname = '';
    let txtcity = '';
    let txtstate = '';
    if(this.nameFilter.value != null)
      txtname=this.nameFilter.value ;
      if(this.cityFilter.value != null)
      txtcity=this.cityFilter.value ;
      if(this.stateFilter.value != null)
      txtstate=this.stateFilter.value ;
      
    const filterValues = {
      name:txtname,
      city: txtcity,
      state: txtstate,
      topFilter:false
    }
    this.dataSource.filter = JSON.stringify(filterValues);

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
       city: filterValue,
       state: filterValue,
       topFilter:true
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

  ngOnInit(): void {
    this.getAllUser();
  }


  /** Whether the number of selected elements matches the total number of rows. */
   /**
* This is the isAllSelected() function
* @returns returns void
*/
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

    /**
* This is the DeleteData() function
* @returns returns void
*/


  DeleteData() {

    const numSelected = this.selection.selected;
    this.lm_contact_id = numSelected.map(({ lm_contact_id }) => lm_contact_id);
    setTimeout(function(){ }, 3000);
    if (numSelected.length > 0) {

      this.dataService.deleteData(this.lm_contact_id).subscribe(result => {
            console.log(result);
           this.getAllUser();
          })
      document.getElementById('message').innerText = "Record deleted";
      setTimeout(()=>{  document.getElementById('message').innerText='' }, 2000);
      ;
    } else {

      document.getElementById('messages').innerText = "Select at least one row";
      setTimeout(()=>{  document.getElementById('messages').innerText='' }, 2000);
      
    }
  }

  /**
* This is the masterToggle() function
* @returns returns void
*/

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

 
/**
* This is the getAllUser() function - Get Data
* @returns returns void
*/
public handlePage(e: any) {
  this.currentPage = e.pageIndex;
  this.pageSize = e.pageSize;
  this.iterator();
}
private iterator() {
  const end = (this.currentPage + 1) * this.pageSize;
  const start = this.currentPage * this.pageSize;
  // const part = this.array.slice(start, end);
  // this.dataSource = part;
  //this.getAllUser();
}

  getAllUser() {
    this.dataService.getAll().subscribe((data) => {
      if (data) {
        this.dataSource = new MatTableDataSource(data.data);
        this.isLoading = false;
        this.dataSource.paginator = this.paginator;
        this.dataSource.filterPredicate = this.customFilterPredicate();
        this.paginationlength = data.data.length;
        this.iterator();
      }

    });
  }

}

