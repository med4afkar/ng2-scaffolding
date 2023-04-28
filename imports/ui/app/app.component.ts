import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { LayoutService } from 'imports/ui/app/services/app.layout.service';
@Component({
  selector: 'app',
  templateUrl: 'app.html'
})
export class AppComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig, private layoutService: LayoutService) {}

  ngOnInit() {
    this.primengConfig.ripple = true;

    this.layoutService.config = {
      ripple: true,                      //toggles ripple on and off
      inputStyle: 'outlined',             //default style for input elements
      menuMode: 'static',                 //layout mode of the menu, valid values are "static", "overlay", "slim" and "horizontal"
      colorScheme: 'light',               //color scheme of the template, valid values are "light", "dim" and "dark"
      theme: 'indigo',                    //default component theme for PrimeNG
      menuTheme: "colorScheme",           //theme of the menu, valid values are "colorScheme", "primaryColor" and "transparent"
      scale: 14                           //size of the body font size to scale the whole application
  };
  }


}
