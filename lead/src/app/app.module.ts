import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/material/material.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatBadgeModule} from '@angular/material/badge'
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';

import {MatIconModule} from '@angular/material/icon';
import { SidenavComponent } from './Components/shared/sidenav/sidenav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { PotentialsComponent } from './Components/potentials/potentials.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AddnotesComponent } from './Components/addnotes/addnotes.component';
import { CreatenewtasksComponent } from './Components/createnewtasks/createnewtasks.component';
import { AccountDetailsComponent } from './Components/account-details/account-details.component';
import { MyGoalsComponent } from './Components/my-goals/my-goals.component';
import { SendEmailsComponent } from './Components/send-emails/send-emails.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RichTextEditorAllModule, ToolbarService, LinkService, ImageService, HtmlEditorService, TableService } from '@syncfusion/ej2-angular-richtexteditor';
import { UpdateGoalsComponent } from './Components/update-goals/update-goals.component';
import { OpenDescriptionModalComponent } from './Components/open-description-modal/open-description-modal.component';
import { ContactsComponent } from './modules/contact/contacts/contacts.component';

import { ContactconvertformComponent } from './modules/contact/contactconvertform/contactconvertform.component';

import { ContactsimporthistoryComponent } from './modules/contact/contactsimporthistory/contactsimporthistory.component';
import { ContactResultSummaryComponent } from './modules/contact/contact-result-summary/contact-result-summary.component';
import { CreateContactComponent } from './modules/contact/create-contact/create-contact.component';
import { ContactinformationComponent } from './modules/contact/contactinformation/contactinformation.component';
import { ImportcontactComponent } from './modules/contact/importcontact/importcontact.component';
import { ContactSalesStatusComponent } from './modules/sales/contact-sales-status/contact-sales-status.component';
import { DraftEmailComponent } from './Modules/Emails/draft-email/draft-email.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { ContactinformationpopupComponent } from './Components/contactinformationpopup/contactinformationpopup.component';
import { ContactinfocompanypopupComponent } from './Components/contactinfocompanypopup/contactinfocompanypopup.component';
import { FeedtypeComponent } from './Components/feedtype/feedtype.component';
import { ExportService } from './shared/services/excel.service';

@NgModule({
  declarations: [
    AppComponent,
    // ContactinformationComponent,
    // ImportcontactComponent,
    // ContactsComponent,
    SidenavComponent,
    // ContactsimporthistoryComponent,
    // ContactconvertformComponent,
    // CreateContactComponent,
    // ContactResultSummaryComponent,
    PotentialsComponent,
    AddnotesComponent,
    CreatenewtasksComponent,
    AccountDetailsComponent,
    MyGoalsComponent,
    SendEmailsComponent,
    UpdateGoalsComponent,
    ContactSalesStatusComponent,
    OpenDescriptionModalComponent,
    DraftEmailComponent,
    PagenotfoundComponent,
    ContactinformationpopupComponent,
    ContactinfocompanypopupComponent,
    FeedtypeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatBadgeModule,
    MatRadioModule,
    NgbModule,
    MatIconModule,
    FlexLayoutModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,  
    MatButtonModule,  
    MatProgressBarModule,
  HttpClientModule,
  MatToolbarModule,
  RichTextEditorAllModule
  // MatFileUploadModule
  ],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, TableService, ExportService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { 
  static injector: Injector;
  constructor(injector: Injector) {
    AppModule.injector = injector;
  }
}
