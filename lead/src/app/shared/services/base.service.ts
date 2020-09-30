import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(
    private http: HttpClient
  ) { }

  get<T>(path: string): Observable<T> {

    // if (!environment.production) { console.log(`EndPoint: ${environment.apiUrl}api/${path}`); }
    return this.http.get<T>(`${environment.apiUrl}${path}`).pipe(catchError(this.handleError));
  }

  getbyid<T>(path: string, data) {
    let param = { params: new HttpParams().set('lm_contact_id', data) }

    return this.http.get<T>(`${environment.apiUrl}${path}`, param).pipe(catchError(this.handleError));
  }
  //Get data by company id
  getbycompanyid<T>(path: string, data) {
    let param = { params: new HttpParams().set('company_id', data) }

    return this.http.get<T>(`${environment.apiUrl}${path}`, param).pipe(catchError(this.handleError));
  }
  //Get Company Count
  getcompanycount<T>(path: string, data) {
    let param = { params: new HttpParams().set('company_id', data) }
    return this.http.get<T>(`${environment.apiUrl}${path}`, param).pipe(catchError(this.handleError));
  }
  // added by shoeb
  getbyidforcontactconvertfrom<T>(path: string,data){
    let param ={params:  new HttpParams().set('lm_contact_id', data)}
  return this.http.get<T>(`${environment.apiUrl}${path}`,param).pipe(catchError(this.handleError));
  }

  //added by shoeb for import contactc result summary -----------------------------------------
  getbyidforfilename<T>(path: Object,data){
    let param = { params: new HttpParams().set('created_by', data) }
  return this.http.get<T>(`${environment.apiUrl}${path}`,param).pipe(catchError(this.handleError));
  }

  getbyidfortotalcountofimportedfile<T>(path: Object,data){
    let param = { params: new HttpParams().set('created_by', data) }
  return this.http.get<T>(`${environment.apiUrl}${path}`,param).pipe(catchError(this.handleError));
  }

  getbyidforgoodcontactcount<T>(path: Object,data){
    let param = { params: new HttpParams().set('created_by', data) }
    return this.http.get<T>(`${environment.apiUrl}${path}`,param).pipe(catchError(this.handleError));
  }
 //---------------------------------------------------------------------------------------------
  post<T>(path: string, data): Observable<T> {

    //if (!environment.production) { console.log(`EndPoint: ${environment.apiUrl}api/${path}`); }
    return this.http.post<T>(`${environment.apiUrl}${path}`, data).pipe(catchError(this.handleError));
  }

  delete<T>(path: string, data) {

    //if (!environment.production) { console.log(`EndPoint: ${environment.apiUrl}api/${path}`); }
    return this.http.delete<T>(`${environment.apiUrl}${path}`, data).pipe(catchError(this.handleError));

  }
  

  put<T>(path: string,data): Observable<T> {
    
    // if (!environment.production) { console.log(`EndPoint: ${environment.apiUrl}api/${path}`); }
    return this.http.put<T>(`${environment.apiUrl}${path}`, data).pipe(catchError(this.handleError));
  }

  // updatesalesstatus<T1,T2>(path: string,salesid,contactid): Observable<T1,T2> {
  //   // if (!environment.production) { console.log(`EndPoint: ${environment.apiUrl}api/${path}`); }
  //   return this.http.put<T1,T2>(`${environment.apiUrl}${path}`,salesid,contactid).pipe(A).catchError(this.handleError));
  // }

  private handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
}
