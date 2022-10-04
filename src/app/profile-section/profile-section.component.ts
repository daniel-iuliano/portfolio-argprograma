import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-section',
  templateUrl: './profile-section.component.html',
  styleUrls: ['./profile-section.component.css']
})
export class ProfileSectionComponent implements OnInit {

  nameProfile:string = "Daniel Iuliano"
  locationProfile:string ="Buenos Aires, Argentina"
  ocupationProfile:string ="Fullstack Developer"

  constructor() { }

  ngOnInit(): void {
  }

}
