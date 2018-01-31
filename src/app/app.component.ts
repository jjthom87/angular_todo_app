import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1></h1>
    <div class="header"><h2>Welcome to {{title}}</h2></div>
    <ul>
      <li><h2><a routerLink="/">Home</a></h2></li>
      <li><h2><a routerLink="/todo">Todo</a></h2></li>
      <li><h2><a routerLink="/course">Course</a></h2></li>
      <li><h2><a routerLink="/courses">Courses</a></h2></li>
    </ul>
    <router-outlet></router-outlet>
  `,
  styles: [`
  .header { text-align:center; margin:15px 0px; }
  ul { list-style-type: none; margin: 0; padding: 0; overflow: hidden; background-color: #333; }
  li { float: left; }
  li a { display: block; color: white; text-align: center; padding: 15px; text-decoration: none; }
  li a:hover { background-color: #111; }
  h1 { text-align:center; font-size: 100px }
  `]
})
export class AppComponent {
  title = 'Angular 4 Baby';
}