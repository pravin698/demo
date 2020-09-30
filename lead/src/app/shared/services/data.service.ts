import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { AppServiceUrls } from 'src/app/app-service-urls';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private actionUrl: string;
  baseService: BaseService;
   convertto_sales_status_id:any = {};
  Convertto_sales_status_detaildata :Array<Object> = [];


  constructor(
    private service: BaseService,
    // private endPoint: string
  ) {
    // this.actionUrl = this.endPoint;
    this.baseService = this.service;
  }

  public deleteData(lm_contact_id): Observable<any> {
    let options = { body: { "lm_contact_id": lm_contact_id } }
    //let options=[{body:id}];
    return this.baseService.delete(AppServiceUrls.deleteData, options);
  }

  public getAll(): Observable<any> {
    return this.baseService.get(AppServiceUrls.getallRecords);
  }
  //get company name from company table
  public getCompanyName(): Observable<any> {
    return this.baseService.get(AppServiceUrls.getCompanyName);
  }
  public getById(lm_contact_id): Observable<any> {
    return this.baseService.getbyid(AppServiceUrls.contactInformationById, lm_contact_id);
  }
  //get data from company table
  public getByCompanyId(company_id): Observable<any> {
    return this.baseService.getbycompanyid(AppServiceUrls.contactInformationByCompanyId, company_id);
  }
  //Get Company Count
  public getCompanyCount(company_id): Observable<any> {
    return this.baseService.getcompanycount(AppServiceUrls.contactInformationByCompanyCount, company_id);
  }
  //update contact information popup
  public updateContactnformation(updateddata): Observable<any> {
    return this.baseService.put(AppServiceUrls.updateContactInformationPopup, updateddata);
  }
  //update company Details popup
  public updateCompanyInformation(updateddata): Observable<any> {
    return this.baseService.put(AppServiceUrls.updateCompanyDetailsPopup, updateddata);
  }
  //added by pravin for insert tasks 
  public inserttasks(taskdata): Observable<any> {
    return this.baseService.post(AppServiceUrls.tasksinsertdata, taskdata);
  }
   //added by pravin for insert tasks 
   public inserttags(tagsdata): Observable<any> {
    return this.baseService.post(AppServiceUrls.tagsinsertdata, tagsdata);
  }
  //added by pravin for get feedtype name
  public getFeedTypeName(): Observable<any> {
    //  return this.baseService.get(`${this.actionUrl}/lmcontact`);
    return this.baseService.get(AppServiceUrls.getFeedTypeName);
  }

  //added by shoeb for getting contact details by id 
  public getdatabyid(lm_contact_id): Observable<any> {
    return this.baseService.getbyidforcontactconvertfrom(AppServiceUrls.getContactdatabyid, lm_contact_id);
  }

 
 // added by shoeb for getting convert form  contact sales status   
setcontactconvertfromsalesstatus(value){
  debugger;
  while(this.Convertto_sales_status_detaildata.length >0){
this.Convertto_sales_status_detaildata.pop();
  }

  this.convertto_sales_status_id = value;
 this.Convertto_sales_status_detaildata.push(this.convertto_sales_status_id);
 
  }

  getcontactconvertfromsalesstatus(){
   return this.Convertto_sales_status_detaildata;
    }
    
 //added by shoeb for import contact result summary ----------------------
  public getfilename(create_dby): Observable<any> {
    return this.baseService.getbyidforfilename(AppServiceUrls.getimportfilename, create_dby);
  }  
  
  public getTotalcountgoodcontactofrecord(created_by): Observable<any> {
    return this.baseService.getbyidfortotalcountofimportedfile(AppServiceUrls.getImportedfiledatacount, created_by);
  }  
  
  public getcontacttypecount(created_by): Observable<any> {
    return this.baseService.getbyidforgoodcontactcount(AppServiceUrls.getgoodContactcount, created_by);
  }  
//---------------------------------------------------------------------------  
//added by shoeb for getting contact type data (dropdown)
public getAllContactTypeList(): Observable<any> {
  return this.baseService.get(AppServiceUrls.getAllcontacttypelistdata);

}

  //added by shoeb 
  public insertintoslaesstatushistory(salesstatushistorydata): Observable<any> {
    return this.baseService.post(AppServiceUrls.ContactSalesStatusHisrtoryinsertdata, salesstatushistorydata);
  }

  //added  by shoeb 
  public updateSalesstausidforcontact(SalesstatusandContactidObj): Observable<any> {
    return this.baseService.put(AppServiceUrls.updatesalesstatusidforcontact, SalesstatusandContactidObj);

  }
//added by shoeb for getting all contact sales status (Dropdown)
  public getAllContactSalesList(): Observable<any> {
    return this.baseService.get(AppServiceUrls.getallSalesStatusRecords);

  }
  public getProductService(): Observable<any> {
    return this.baseService.get(AppServiceUrls.getProducts);

  }

  public updateSales(updateddata): Observable<any> {
    return this.baseService.put(AppServiceUrls.updateSaleStatusRecords, updateddata);

  }

  public getSaleStatus(): Observable<any> {
    return this.baseService.get(AppServiceUrls.getSalesStatus);

  }

  public createNewContact(newContact): Observable<any> {
    return this.baseService.post(AppServiceUrls.CreateNewContact, newContact);
  }
  public createContact(newContact): Observable<any> {
    return this.baseService.post(AppServiceUrls.CreateContact, newContact);
  }

  public createImportStatus(statusRecord): Observable<any> {
    return this.baseService.post(AppServiceUrls.importDetails , statusRecord);
  }

  public offerings(offerings): Observable<any> {
    return this.baseService.post(AppServiceUrls.offeringsService, offerings);
  }

  public getImport(): Observable<any> {
    return this.baseService.get(AppServiceUrls.importData);
  }

  public onImportContact(importcontact): Observable<any> {
    return this.baseService.post(AppServiceUrls.postImportData, importcontact);
  }

  public getImportDetails(): Observable<any> {
    return this.baseService.get(AppServiceUrls.importDetails);
  }

  public onImportDetailsContact(importdetailcontact): Observable<any> {
    return this.baseService.post(AppServiceUrls.postImportDetailData, importdetailcontact);
  }

  public onFeedTypeSave(feedtype): Observable<any> {
    return this.baseService.post(AppServiceUrls.postFeedType, feedtype);
  }

  //added by pravin for get feedtype name
  public getAddnotesFeedTypeName(): Observable<any> {
    return this.baseService.get(AppServiceUrls.getaddnotesFeedTypeName);
  }

  //added by pravin for get feedtype name
  public getAddnotesTaskName(): Observable<any> {
    return this.baseService.get(AppServiceUrls.getAddNotesTaskName);
  }

  public insertAddNotes(addnotesdata): Observable<any> {
    return this.baseService.post(AppServiceUrls.postaddnotes, addnotesdata);
  }
}
