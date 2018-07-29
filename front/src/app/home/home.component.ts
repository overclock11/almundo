import {Component, OnInit} from '@angular/core';
import {HotelsService, IHotel} from "../services/hotels.service";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public hotels:Array<IHotel>;
  public hotelName: string;
  private selectedStars: number[] = [];
  public api = environment.base;
  public showNameField: boolean = true;
  public showStarsField: boolean = true;
  public progressBar: boolean = true;
  constructor(private hotelsService: HotelsService) { }

  ngOnInit() {
    this.loadHotels();
  }

  /**
   * Carga los hoteles al entrar en la vista
   */
  loadHotels(){
    this.progressBar = false;
    this.hotelsService.getAllHotels().subscribe((hotels)=>{
      this.hotels = hotels;
      this.progressBar = true;
      console.log(this.hotels);
    }, (err)=>{
      console.log(err);
    })
  }

  searchByName(){
    this.progressBar = false;
    if(this.hotelName===''){
      this.loadHotels();
    } else {
      this.hotelsService.getByName(this.hotelName).subscribe((hotels)=>{
        this.hotels = hotels;
        this.progressBar = true;
        console.log(this.hotels);
      }, (err)=>{
        console.log(err);
      })
    }
  }

  /**
   * Busca por estrellas
   * @param {number} stars
   */
  getByStars(stars: number) {
    this.progressBar = false;
    if (this.selectedStars.toString().indexOf(stars.toString()) >= 0) {
      let index = null;
      for(let i =0; i<this.selectedStars.length;i++){
        if(this.selectedStars[i]===stars){
          index = i;
        }
      }
      this.selectedStars.splice(index,1);
      if(this.selectedStars.toString()===''){
        this.loadHotels();
      } else {
        this.hotels = this.hotels.filter((hotel) => {
          return hotel.stars !== stars;
        })
      }
    } else {
      this.selectedStars.push(stars);
      if(this.selectedStars.length>1){
        this.hotelsService.getByStars(stars).subscribe((hotels) => {
          this.hotels = this.hotels.concat(hotels);
          this.progressBar = true;
        }, (err) => {
          console.log(err);
        });
      } else {
        this.hotelsService.getByStars(stars).subscribe((hotels) => {
          this.hotels = hotels;
          this.progressBar = true;
        }, (err) => {
          console.log(err);
        });
      }
    }
    console.log(this.hotels);
  }
}
