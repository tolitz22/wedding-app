import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'wedding-app';
  // get total seconds between the times
	delta;
	days;
	hours:any;
	minutes;
	seconds;	

	date_future;
	date_now;


	getRemainingDays = () => {
		this.date_now = new Date();

		this.date_future = new Date(new Date().getFullYear(), 5, 11, 9, 30);
		// last part/argument is american time
		// console.log(this.date_future);

		this.delta = Math.abs(this.date_future - this.date_now) / 1000;

		// calculate (and subtract) whole days
		this.days = Math.floor(this.delta / 86400);
		this.delta -= this.days * 86400;

		// calculate (and subtract) whole hours
		this.hours = Math.floor(this.delta / 3600) % 24;
		this.delta -= this.hours * 3600;

		if (this.hours < 10){
			this.hours = "0"+this.hours;
		}
		// calculate (and subtract) whole minutes
		this.minutes = Math.floor(this.delta / 60) % 60;
		this.delta -= this.minutes * 60;

		// what's left is seconds
		this.seconds = Math.trunc(this.delta % 60);

	}

  ngOnInit(){
	  setInterval(this.getRemainingDays, 1000)
	     	
  }





}
