import {Component, View} from 'angular2/angular2';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {RouteConfig, Router, RouterOutlet} from 'angular2/router';

import {DashboardComponent} from './components/dashboard.component';
import {CharacterComponent} from './components/character.component';

@Component({ selector: 'app' })
@View({
  template: `
        <nav class="navbar navbar-inverse">
          <div class="navbar-header">
            <a class="navbar-brand" [router-link]="['./Dashboard']">Kart</a>
          </div>
          <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
              <li><a [router-link]="['./Dashboard']">Dashboard</a></li>
              <li><a [router-link]="['./Character']">Character</a></li>
            </ul>
          </div>
        </nav>
        <div class="container">
          <router-outlet></router-outlet>
        </div>
    `,
  directives: [ROUTER_DIRECTIVES]
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
export class App {
}
