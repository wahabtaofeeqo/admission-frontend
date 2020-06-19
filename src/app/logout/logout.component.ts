import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.sass']
})
export class LogoutComponent implements OnInit {

  	constructor(private router: Router, private activated: ActivatedRoute) {

  	}

  	ngOnInit() {
  		this.activated.queryParams.subscribe(params => {
  			let page = params['page'];

  			if (page == 'admin') {
  				sessionStorage.removeItem('adminEmail');
  				this.router.navigate(['/admin-login']);
  			}
  			else {
  				sessionStorage.removeItem('studentEmail');
  				this.router.navigate(['/']);
  			}
  		})
  	}
}
