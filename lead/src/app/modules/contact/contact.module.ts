import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactResultSummaryComponent } from './contact-result-summary/contact-result-summary.component';
import { ContactconvertformComponent } from './contactconvertform/contactconvertform.component';
import { ContactinformationComponent } from './contactinformation/contactinformation.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsimporthistoryComponent } from './contactsimporthistory/contactsimporthistory.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { ImportcontactComponent } from './importcontact/importcontact.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/material/material.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatBadgeModule } from '@angular/material/badge'
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { RichTextEditorAllModule, ToolbarService, LinkService, ImageService, HtmlEditorService, TableService } from '@syncfusion/ej2-angular-richtexteditor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    ContactResultSummaryComponent,
    ContactconvertformComponent,
    ContactinformationComponent,
    ContactsComponent,
    ContactsimporthistoryComponent,
    CreateContactComponent,
    ImportcontactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
    FlexLayoutModule,
    HttpClientModule,
    RichTextEditorAllModule,
  ]
})
export class ContactModule { }
