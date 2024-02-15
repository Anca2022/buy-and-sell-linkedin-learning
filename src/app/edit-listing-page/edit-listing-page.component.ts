import { Component } from '@angular/core';
import { ListingDataFormComponent } from '../listing-data-form/listing-data-form.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-edit-listing-page',
  standalone: true,
  imports: [ListingDataFormComponent], //, RouterModule],
  templateUrl: './edit-listing-page.component.html',
  styleUrl: './edit-listing-page.component.css'
})
export class EditListingPageComponent {

}
