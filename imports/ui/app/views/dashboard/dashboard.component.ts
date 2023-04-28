import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class Dashboard implements OnInit {
  items = [
    { label: 'Dashboard', route: 'dashboard', icon: 'dashboard' },
    { label: 'Users', route: 'users', icon: 'people' },
    { label: 'Settings', route: 'settings', icon: 'settings' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
