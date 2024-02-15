import { Routes } from '@angular/router';
import { ListingsPageComponent } from './listings-page/listings-page.component';
import { MyListingsPageComponent } from './my-listings-page/my-listings-page.component';
import { NewListingPageComponent } from './new-listing-page/new-listing-page.component';
import { EditListingPageComponent } from './edit-listing-page/edit-listing-page.component';
import { ListingDetailPageComponent } from './listing-detail-page/listing-detail-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

export const routes: Routes = [
    {path:'', pathMatch:'full', redirectTo:'listings'}, 
    {path:'listings', component:ListingsPageComponent }, 
    {path:'listing-detail/:id', component:ListingDetailPageComponent }, 
    {path:'my-listings', component:MyListingsPageComponent},
    {path:'new-listing', component:NewListingPageComponent},
    {path:'edit-listing/:id', component:EditListingPageComponent},
    {path:'contact/:id', component:ContactPageComponent},
];
