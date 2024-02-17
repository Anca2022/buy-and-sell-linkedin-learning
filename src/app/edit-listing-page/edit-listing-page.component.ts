import { Component, OnInit} from '@angular/core';
import { ListingDataFormComponent } from '../listing-data-form/listing-data-form.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../types';
import { fakeMyListings } from '../fake-data';

@Component({
  selector: 'app-edit-listing-page',
  standalone: true,
  imports: [ListingDataFormComponent], 
  templateUrl: './edit-listing-page.component.html',
  styleUrl: './edit-listing-page.component.css'
})
export class EditListingPageComponent implements OnInit{
  listing!:Listing; 
  constructor(private route:ActivatedRoute, private router:Router){}

  ngOnInit(): void {
    this.route.params.subscribe(param=>{
      if(fakeMyListings.find(listing => listing.id === param['id'])!==undefined){
        this.listing = fakeMyListings.find(listing=> listing.id === param['id'])!
      } 
    })
  }

  onSubmit(id:string):void{
    alert(`updating the item with id no ${id}`); 
    this.router.navigateByUrl('/my-listings');
  }
  
}
 