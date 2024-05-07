import { Component, OnInit, inject } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { App } from '@capacitor/app';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  url = "https://boosterhub.up.railway.app/";

  browser = inject(InAppBrowser);

  ngOnInit(): void {

    const browserInstance = this.browser.create(
      this.url,
      '_self',
      'location=no, hidenavigationbuttons=true, hideurlbar=true, zoom=no'
    );

    browserInstance.on('exit').subscribe((ev) => {
      App.exitApp();
    });
  }

}
