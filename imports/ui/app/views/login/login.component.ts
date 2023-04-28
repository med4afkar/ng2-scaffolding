import { Component, OnInit, OnDestroy, NgZone, ElementRef } from '@angular/core';

import { Meteor } from 'meteor/meteor';
import { Router } from '@angular/router';


@Component({
	selector: 'login',
	templateUrl: 'login.html',
	styleUrls: ['./login.scss']
})
export class Login implements OnDestroy {
	user: string;
	password: string;
	
	constructor(private router: Router, private elementRef: ElementRef) {
		
	}
	login() {
		Meteor.loginWithPassword(this.user, this.password, (err) => {
			if (err) {
				console.log(err);
			} else {
				this.router.navigate(['dashboard']);
			}
		});
	}
	
	ngOnDestroy() {
		this.elementRef.nativeElement.remove();
	}
}