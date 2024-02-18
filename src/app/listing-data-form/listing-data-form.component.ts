import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Listing } from '../types';
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
  
  constructor(){}
  ngOnInit(): void {
    this.name = this.currentName;
    this.description = this.currentDescription; 
    this.price = this.currentPrice; 
    
  }
  
  onButtonClicked():void{
    this.onSubmit.emit({
      id:null!, 
      name:this.name, 
      description:this.description,
      price:Number(this.price),
    })
  }
    
}
