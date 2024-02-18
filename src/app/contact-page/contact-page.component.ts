import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Listing } from '../types';
import { FormsModule } from '@angular/forms';
import { fakeListings } from '../fake-data';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent implements OnInit{
  message:string='';
  email:string='';
  listing!:Listing; 

  constructor(private route:ActivatedRoute, private router:Router){}

  ngOnInit(): void {
    this.route.params.subscribe(param=>
      this.listing = fakeListings.find(listing=> listing.id===param['id'])!
      )
    this.message = `Hi, I'm interested in your ${this.listing.name.toLowerCase()}!`
  }

  sendMessage():void{
    alert('Message has been sent!')
    this.router.navigateByUrl('/listings')
  } 
}
