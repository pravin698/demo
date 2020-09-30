import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImportcontactComponent } from './importcontact/importcontact.component';
import { ContactinformationComponent } from './contactinformation/contactinformation.component';
import { ContactconvertformComponent } from './contactconvertform/contactconvertform.component';
import { ContactsimporthistoryComponent } from './contactsimporthistory/contactsimporthistory.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { ContactResultSummaryComponent } from 'src/app/modules/contact/contact-result-summary/contact-result-summary.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SidenavModule } from 'src/app/Components/shared/sidenav/sidenav/sidenav.module';

const routes: Routes = [
    { path: '', redirectTo: 'Contacts', pathMatch: 'full' },
    // { path: '', component: ContactsComponent,
    // children: [

    { path: 'Contacts', component: ContactsComponent },
    { path: 'importContacts', component: ImportcontactComponent },
    { path: 'Contactsinformation/:value', component: ContactinformationComponent },
    { path: 'ContactConvertForm/:value', component: ContactconvertformComponent },
    { path: 'ContactsImportHistory', component: ContactsimporthistoryComponent },
    { path: 'CreateContact', component: CreateContactComponent },
    { path: 'importSummary', component: ContactResultSummaryComponent },
    //     ] 
    // }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContactRoutingModule { }
