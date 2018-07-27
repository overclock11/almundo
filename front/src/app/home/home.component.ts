import { Component, OnInit } from '@angular/core';
import {HotelsService, IHotel} from "../services/hotels.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public hotels: Array<IHotel>;
  constructor(private hotelsService: HotelsService) { }

  ngOnInit() {
    this.loadHotels();

  }

  /**
   * Carga los hoteles al entrar en la vista
   */
  loadHotels(){
    this.hotelsService.getAllHotels().subscribe((hotels)=>{
      this.hotels = hotels;
      console.log(this.hotels);
    }, (err)=>{
      console.log(err);
    })
  }

}
