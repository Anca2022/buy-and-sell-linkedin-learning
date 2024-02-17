import { Component, OnInit } from '@angular/core';
import { ListingDataFormComponent } from '../listing-data-form/listing-data-form.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-listing-page',
  standalone: true,
  imports: [ListingDataFormComponent],
  templateUrl: './new-listing-page.component.html',
  styleUrl: './new-listing-page.component.css'
})
export class NewListingPageComponent implements OnInit{
  constructor(private route:ActivatedRoute, private router:Router){}

  ngOnInit(): void {
   
  }

  onSubmit():void{
    alert(`creating new item...`); 
    this.router.navigateByUrl('/my-listings');
  }

}
