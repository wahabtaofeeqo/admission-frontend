import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})


export class NavbarComponent implements OnInit {

	online;

  	constructor() { }

  	ngOnInit() {
  		if (sessionStorage.getItem('studentEmail') == null) {
  			this.online = false;
  		}
  		else {
  			this.online = true;
  		}
  	}

}
