import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Listing } from '../types';
import { fakeListings } from '../fake-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listings-page',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './listings-page.component.html',
  styleUrl: './listings-page.component.css'
})
export class ListingsPageComponent implements OnInit{
  listings! : Listing[]; 
  constructor(){}

  ngOnInit(): void {
    this.listings = fakeListings;
  }


}
