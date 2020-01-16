import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  //Variables simulando estructura de servicios
  public mesesArray = [
    {id:1, name:"Enero", days:[{monday:['6','13','20','27']}]}, 
    {
      id:2,
      year:2020,
      name: "Febrero",
      monday: ['3','10','17','24'],
      tuesday: ['4','11','18','25'],
      wednesday: ['5','12','19','26'],
      thursday: ['6','13','20','27'],
      friday: ['7','14','21','28'],
      saturday: ['1','8','15','22','29'],
      sunday: ['2','9','16','23'],
      previousMonthId: "1",
      previousMonth: "Enero",
      nextMonthId: "3",
      nextMonth: "Marzo"
    },
    {id:3, name:"Marzo", days:[{monday:['6','13','20','27']}]},
  ];

  public febreroArray = {
    id:2,
    year:2020,
    name: "Febrero",
    monday: ['3','10','17','24'],
    tuesday: ['4','11','18','25'],
    wednesday: ['5','12','19','26'],
    thursday: ['6','13','20','27'],
    friday: ['7','14','21','28'],
    saturday: ['1','8','15','22','29'],
    sunday: ['2','9','16','23'],
    previousMonthId: "1",
    previousMonth: "Enero",
    nextMonthId: "3",
    nextMonth: "Marzo"
  };
  
  mondayArray = [];

  ngOnInit() {
   console.log(this.mesesArray[1])
   this.mondayArray = this.mesesArray[1].monday;
   console.log(this.mondayArray);
  }

}
