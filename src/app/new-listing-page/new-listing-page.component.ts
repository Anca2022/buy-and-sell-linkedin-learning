import { Component } from '@angular/core';
import { ListingDataFormComponent } from '../listing-data-form/listing-data-form.component';

@Component({
  selector: 'app-new-listing-page',
  standalone: true,
  imports: [ListingDataFormComponent],
  templateUrl: './new-listing-page.component.html',
  styleUrl: './new-listing-page.component.css'
})
export class NewListingPageComponent {

}
