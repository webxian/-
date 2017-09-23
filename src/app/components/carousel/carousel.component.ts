import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit{

  constructor() { }
  ngOnInit(){
    $(".slide-one").click(function(){
      $("#myCarousel").carousel(0);
  });
    $(".slide-two").click(function(){
      $("#myCarousel").carousel(1);
  });
    $(".slide-three").click(function(){
      $("#myCarousel").carousel(2);
  });
   $(".slide-four").click(function(){
    $("#myCarousel").carousel(3);
});
  }




}
