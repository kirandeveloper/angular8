import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // isPresent var is declared
  isPresent:boolean = true;

  // Title variable declared
  title = 'student / Data binding using String Interpolation';

  numberA: number = 10;  
  numberB: number = 20;

  addTwoNumbers() {  
    return this.numberA + this.numberB;  
  }

   // declared array of months. 
   months = ["January", "February", "March", "April", "May", "June", "July", 
      "August", "September", "October", "November", "December"];

    isavailable = true; //variable is set to true

    // property binding
    imgUrl="https://avatars2.githubusercontent.com/u/20270535?s=40&v=4"; 

    // event filter
    onPressEnter($event){  
    if($event.keyCode===13){  
      console.log("Entered text: ",$event.target.value);  
      }  
      console.log("Entered text: ",$event.target.value);
    } 
 
   
   //twoway databinding
   fullName: string = "Hello Anudip";    

   myClickFunction(event) 
   {
      //just added console.log which will display the event details in browser on click of the button.
      alert("Welcome to my website");
      console.log(event);
   }

   changemonths(event) 
   {
      console.log("Changed month from the Dropdown");
      console.log(event);
      alert("Changed month from the Dropdown");
      alert(event.target.value);
   }

   //services
   titles = 'Angular 7 Project!'; 
   todaydate;
   constructor(private myservice: MyserviceService) {}
   ngOnInit() { 
      this.todaydate = this.myservice.showTodayDate(); 
   } 


}
