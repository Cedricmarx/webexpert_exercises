import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'h45-oefening2';
  visible: boolean = false;
  dates: string[] = [];

  toggleVisibility() {
    let date = new Date();
    let dateFormatted = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
    let timeFormatted = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    this.dates.push(dateFormatted + ' ' + timeFormatted);
    if (this.visible) {
      this.visible = false;
    } else {
      this.visible = true;
    }
  }
}
