import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Black vynils';
  componentActive = 'albums';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        let path: string[];
        path = val.url.split('/');
        if (path[1] === '') {
          this.componentActive = 'albums';
        } else {
          this.componentActive = path[1];
        }
      }
    });
  }
}
