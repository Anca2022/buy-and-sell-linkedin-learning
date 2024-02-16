import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Listing } from '../types';
import { fakeMyListings } from '../fake-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-listings-page',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './my-listings-page.component.html',
  styleUrl: './my-listings-page.component.css'
})
export class MyListingsPageComponent implements OnInit{

  listings!:Listing[];  
  constructor(){}
  
  ngOnInit(): void {
    this.listings= fakeMyListings;
  }
  deleteItem(id:string):void {
    alert(`The item with id no: ${id} has been deleted`); 
  }
}
