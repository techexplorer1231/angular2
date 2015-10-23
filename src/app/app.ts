import {Component, View} from 'angular2/angular2';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {RouteConfig, Router, RouterOutlet} from 'angular2/router';

import {DashboardComponent} from './dashboard.component.ts';
import {CharacterComponent} from './character.component.ts';

@Component({ selector: 'app' })
@View({
  template: `
        <nav class="navbar">
          <div class="navbar-header">
            <a class="navbar-brand" [router-link]="['./Dashboard']">Kart</a>
          </div>
          <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
              <li><a [router-link]="['./Dashboard']" class="router-link">Dashboard</a></li>
              <li><a [router-link]="['./Character']" class="router-link">Character</a></li>
            </ul>
          </div>
        </nav>
        <div class="container">
          <router-outlet></router-outlet>
        </div>
    `,
  directives: [ROUTER_DIRECTIVES],
  styles: [`
      .router-link:visited, .router-link:link {color: #444;}
      .router-link:hover {color: white; background-color: #1171a3; text-decoration: none;}
      .router-link.router-link-active {color: white; background-color: #52b9e9; text-decoration: none;}
    `]
})
@RouteConfig([
  {
    path: '/',
    as: 'Dashboard',
    component: DashboardComponent
  },
  {
    path: '/character',
    as: 'Character',
    component: CharacterComponent
  }
])
export class App { }
