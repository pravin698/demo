import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SidenavComponent } from '../sidenav.component';

import { MaterialModule } from 'src/app/material/material.module';

import { PotentialsComponent } from 'src/app/Components/potentials/potentials.component';
import { AddnotesComponent } from 'src/app/Components/addnotes/addnotes.component';
import { CreatenewtasksComponent } from 'src/app/Components/createnewtasks/createnewtasks.component';
import { AccountDetailsComponent } from 'src/app/Components/account-details/account-details.component';
import { MyGoalsComponent } from 'src/app/Components/my-goals/my-goals.component';
import { SendEmailsComponent } from 'src/app/Components/send-emails/send-emails.component';
import { UpdateGoalsComponent } from 'src/app/Components/update-goals/update-goals.component';
import { OpenDescriptionModalComponent } from 'src/app/Components/open-description-modal/open-description-modal.component';
import { ContactsComponent } from 'src/app/modules/contact/contacts/contacts.component';
import { ContactconvertformComponent } from 'src/app/modules/contact/contactconvertform/contactconvertform.component';
import { ContactsimporthistoryComponent } from 'src/app/modules/contact/contactsimporthistory/contactsimporthistory.component';
import { ContactResultSummaryComponent } from 'src/app/modules/contact/contact-result-summary/contact-result-summary.component';
import { CreateContactComponent } from 'src/app/modules/contact/create-contact/create-contact.component';
import { ContactinformationComponent } from 'src/app/modules/contact/contactinformation/contactinformation.component';
import { ImportcontactComponent } from 'src/app/modules/contact/importcontact/importcontact.component';
import { ContactSalesStatusComponent } from 'src/app/modules/sales/contact-sales-status/contact-sales-status.component';
import { DraftEmailComponent } from 'src/app/Modules/Emails/draft-email/draft-email.component';
import { ContactModule } from 'src/app/modules/contact/contact.module';
import { ContactRoutingModule } from 'src/app/modules/contact/contact-routing.module';
import { SalesRoutingModule } from 'src/app/modules/sales/sales-routing.module';
import { PagenotfoundComponent } from 'src/app/Components/pagenotfound/pagenotfound.component';
import { FeedtypeComponent } from 'src/app/Components/feedtype/feedtype.component';

const routes: Routes = [

  {
    path: '', component: SidenavComponent,
    children: [
      { path: '', redirectTo: 'contacts', pathMatch: 'full' },
      {
        path: 'contacts', loadChildren: () => import('src/app/modules/contact/contact-routing.module')
          .then(m => m.ContactRoutingModule)
      },
      {
        path: 'sales', loadChildren: () => import('src/app/modules/sales/sales-routing.module')
          .then(m => m.SalesRoutingModule)
      },

      // {path: 'importContacts', component: ImportcontactComponent}
      // {path: 'Contactsinformation', component: ContactinformationComponent },
      //  {path: 'ContactConvertForm', component: ContactconvertformComponent },
      // {path: 'ContactsImportHistory', component: ContactsimporthistoryComponent },
      // {path: 'CreateContact', component: CreateContactComponent },

      // { path: '', component: ContactsComponent },
      // {path: 'importSummary', component: ContactResultSummaryComponent },
      { path: 'AddNotes', component: AddnotesComponent },
      { path: 'Potentials', component: PotentialsComponent },
      { path: 'createnewtasks', component: CreatenewtasksComponent },
      { path: 'accountdetails', component: AccountDetailsComponent },
      { path: 'mygoals', component: MyGoalsComponent },
      { path: 'updategoals', component: UpdateGoalsComponent },
      { path: 'SendEmails', component: SendEmailsComponent },
      { path: 'draftEmails', component: DraftEmailComponent },
      { path: 'ContactSalesStatus', component: ContactSalesStatusComponent },
      { path: 'OpenDescriptionModal', component: OpenDescriptionModalComponent },
      { path: 'feedtype', component: FeedtypeComponent },
      { path: '**', redirectTo: '404', pathMatch: 'full' },
      { path: '404', component: PagenotfoundComponent }
    ],
  },


];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), MaterialModule,
    CommonModule
  ]
})
export class SidenavModule { }
