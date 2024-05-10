import { Component, OnInit, inject } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { App } from '@capacitor/app';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  url = "https://boosterhub.up.railway.app/";

  browser = inject(InAppBrowser);
  screen = inject(ScreenOrientation);

  ngOnInit(): void {

    this.screen.lock(this.screen.ORIENTATIONS.PORTRAIT);

    const browserInstance = this.browser.create(
      this.url,
      '_self',
      'location=no,zoom=no'
    );

    browserInstance.on('exit').subscribe((ev) => {
      App.exitApp();
    });
  }

}
