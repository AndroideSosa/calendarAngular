import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  //Variables simulando estructura de servicios
  public monthArray = [
    { id:1,
      year:2020,
      name: "Enero",
      monday: [ {id:1, day:'', status: 'Active'},
                {id:2, day:'6', status: 'Active'},
                {id:3, day:'13', status: 'Active'},
                {id:4, day:'20', status: 'Active'},
                {id:5, day:'27', status: 'Active'}],
      tuesday: [ {id:1, day:'', status: 'Active'}, 
                 {id:2, day:'7', status: 'Active'},
                 {id:3, day:'14', status: 'Active'},
                 {id:4, day:'21', status: 'Active'},
                 {id:5, day:'28', status: 'Active'}],
      wednesday: [ {id:1, day:'1', status: 'Active'},
                   {id:2, day:'8', status: 'Active'},
                   {id:3, day:'15', status: 'Active'},
                   {id:4, day:'22', status: 'Active'},
                   {id:5, day:'29', status: 'Active'}],
      thursday: [ {id:1, day:'2', status: 'Active'},
                  {id:2, day:'9', status: 'Active'},
                  {id:3, day:'16', status: 'Active'},
                  {id:4, day:'23', status: 'Active'},
                  {id:5, day:'30', status: 'Active'}],
      friday: [ {id:1, day:'3', status: 'Active'},
                {id:2, day:'10', status: 'Active'},
                {id:3, day:'17', status: 'Active'},
                {id:4, day:'24', status: 'Active'},
                {id:5, day:'31', status: 'Active'}],
      saturday: [ {id:1, day:'4', status: 'Active'},
                  {id:2, day:'11', status: 'Active'},
                  {id:3, day:'18', status: 'Active'},
                  {id:4, day:'25', status: 'Active'},
                  {id:5, day:'', status: 'Active'}],
      sunday: [ {id:1, day:'5', status: 'Active'},
                {id:2, day:'12', status: 'Active'},
                {id:3, day:'19', status: 'Active'},
                {id:4, day:'26', status: 'Active'},
                {id:5, day:'', status: 'Active'}],
      previousMonthId: "12",
      previousMonth: "Diciembre",
      nextMonthId: "2",
      nextMonth: "Febrero"}, 
  ];

  
  public mondayArray: any = [];
  public currentMonthArray: any =  [];
  public currentMonthTitle: string = null;
  public currentYearTitle: string = null;
  public previousMonthTitle: string = null;
  public nextMonthTitle: string = null;

  ngOnInit() {
   console.log(this.monthArray[0])
   this.currentMonthArray = this.monthArray[0];
   this.currentMonthTitle = this.currentMonthArray.name;
   this.currentYearTitle = this.currentMonthArray.year;
   this.previousMonthTitle = this.currentMonthArray.previousMonth;
   this.nextMonthTitle = this.currentMonthArray.nextMonth;
   this.mondayArray = this.monthArray[0].monday;
   console.log(this.mondayArray);
  }

  public prueba(dia:string){
    console.log(" Se selecciona día " + ' ' + dia);
  }

}
