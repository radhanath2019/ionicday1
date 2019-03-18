import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  openUrl(){
    window.open("https://docs.google.com/forms/d/1MGEIqw9VxONeDVJeHcO5GmJ98I2i9ALm0KF58e4Aih8/edit");
  }
}
