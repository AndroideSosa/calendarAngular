import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  //Variables simulando estructura de servicios
  public mesesArray = [
    { id:1,
      year:2020,
      name: "Enero",
      monday: [ {id:1, day:'6', status: 'Active'},
                {id:2, day:'13', status: 'Active'},
                {id:3, day:'20', status: 'Active'},
                {id:4, day:'27', status: 'Active'}],
      tuesday: [  {id:1, day:'7', status: 'Active'},
                  {id:2, day:'14', status: 'Active'},
                  {id:3, day:'21', status: 'Active'},
                  {id:4, day:'28', status: 'Active'}],
      wednesday: ['5','12','19','26'],
      thursday: ['6','13','20','27'],
      friday: ['7','14','21','28'],
      saturday: ['1','8','15','22','29'],
      sunday: ['2','9','16','23'],
      previousMonthId: "1",
      previousMonth: "Enero",
      nextMonthId: "3",
      nextMonth: "Marzo"}, 
    {
      id:2,
      year:2020,
      name: "Febrero",
      monday: [{id:1, day:'3', status: 'Active'},
                {id:2, day:'10', status: 'Active'},
                {id:3, day:'17', status: 'Active'},
                {id:4, day:'17', status: 'Active'}],
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
    }
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
  
  public mondayArray = [];
  public currentMonthArray = [];
  public currentMonthTitle: string = null;

  ngOnInit() {
   console.log(this.mesesArray[0])
   this.currentMonthArray = this.mesesArray[0];
   this.currentMonthTitle = this.currentMonthArray.name;
   this.mondayArray = this.mesesArray[0].monday;
   console.log(this.mondayArray);
  }

  public prueba(dia:string){
    console.log(" Se selecciona día " + ' ' + dia);
  }

}
