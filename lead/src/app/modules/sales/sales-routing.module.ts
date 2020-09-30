import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidenavModule } from 'src/app/Components/shared/sidenav/sidenav/sidenav.module';
import { ContactSalesStatusComponent } from './contact-sales-status/contact-sales-status.component';

const routes: Routes = [
    { path: '', redirectTo: 'contactsalesstatus', pathMatch: 'full' },
    // { path: '', component: ContactsComponent,
    // children: [

    { path: 'contactsalesstatus', component: ContactSalesStatusComponent },

    //     ]
    // }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SalesRoutingModule { }
