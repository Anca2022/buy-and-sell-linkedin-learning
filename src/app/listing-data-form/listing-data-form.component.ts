import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Input() buttonText:string = 'Save changes';
  @Input() currentName = ''; 
  @Input() currentDescription = ''; 
  @Input() currentPrice = ''; 

  name!:string;
  description!:string;
  price!:string; 

  @Output() onSubmit = new EventEmitter<Listing>(); 
  
  constructor(private route:ActivatedRoute, private router:Router){}
  ngOnInit(): void {
    this.name = this.currentName;
    this.description = this.currentDescription; 
    this.price = this.currentPrice; 
    // this.route.params.subscribe(param=>{
    //   if(fakeMyListings.find(listing => listing.id === param['id'])!==undefined){
    //     this.listing = fakeMyListings.find(listing=> listing.id === param['id'])!
    //   } 
    // })
  }
  
  // updateItem(id:string):void{
    onButtonClicked():void{
      this.onSubmit.emit({
        id:null!, 
        name:this.name, 
        description:this.description,
        price:Number(this.price),
      })
    }
    
}
