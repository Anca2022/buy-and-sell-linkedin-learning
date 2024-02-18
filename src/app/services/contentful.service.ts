import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { Listing } from '../types';
import { from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  constructor() { }

  private client = createClient({
    space:'v4hom34xhdqc', 
    accessToken:'EQ0dL4-2Plxyb9oRc74rujYBsBtfeHTkgbTG2jnT_BY'
  })

  getAllListings(){
    const promise = this.client.getEntries();
    return from(promise); 
  }



  // private getAllEntries(user= 'myself') : Listing[] {
  //   let listings:Listing[]=[]; 
  //   let myListings: Listing[]=[];

  //   this.client.getEntries()
  //   .then(entries => {
  //     for (let i=0; i< entries.items.length; i++){
  //       let item:Listing= {
  //         id : String(entries.items[i].fields['id']), 
  //         name : String(entries.items[i].fields['name']), 
  //         description : String(entries.items[i].fields['description']), 
  //         price : Number(entries.items[i].fields['price'])          
  //       }

  //       if(entries.items[i].sys.contentType.sys.id === 'myListings'){      
  //         myListings.push(item); 
  //       }
  //       else if (entries.items[i].sys.contentType.sys.id === 'listing'){
  //         listings.push(item); 
  //       }
  //     }
  //   });

  //   if (user === 'others') {return listings}; 
  //   return myListings;
  // }

  // getListings(): Listing[]{
  //   return this.getAllEntries('others'); 
  // }

  // getMyListings() : Listing[] {
  //   let listings:Listing[]=this.getAllEntries('myself'); 
  //   return listings;
  // }
}
