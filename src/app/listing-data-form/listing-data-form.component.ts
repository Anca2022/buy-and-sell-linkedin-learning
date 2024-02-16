import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Listing } from '../types';
import { fakeMyListings } from '../fake-data';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listing-data-form',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './listing-data-form.component.html',
  styleUrl: './listing-data-form.component.css'
})
export class ListingDataFormComponent implements OnInit{
  @Input() buttonText:string='Save changes';
  listing!:Listing; 
  constructor(private route:ActivatedRoute, private router:Router){}
  ngOnInit(): void {
    this.route.params.subscribe(param=>{
      if(fakeMyListings.find(listing => listing.id === param['id'])!==undefined){
        this.listing = fakeMyListings.find(listing=> listing.id === param['id'])!
      } 
    })
  }
  
  updateItem(id:string):void{
    alert(`Item id no: ${id} has been updated`);
    this.router.navigateByUrl('/my-listings');
  }
}
