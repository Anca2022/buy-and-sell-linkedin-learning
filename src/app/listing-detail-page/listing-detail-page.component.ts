import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Listing } from '../types';
import { fakeListings } from '../fake-data';

@Component({
  selector: 'app-listing-detail-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './listing-detail-page.component.html',
  styleUrl: './listing-detail-page.component.css'
})
export class ListingDetailPageComponent implements OnInit{
  listing!:Listing;
  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(param=> {
      if(fakeListings.find(listing => listing.id === param['id'])!==undefined){
        this.listing= fakeListings.find(listing => listing.id === param['id'])!
      }
    }
    );
  }

}
