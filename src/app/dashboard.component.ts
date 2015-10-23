/// <reference path="../../node_modules/immutable/dist/immutable.d.ts" />
import {Component, View} from 'angular2/angular2';
import {Map} from "immutable";

@Component({ selector: 'my-dashboard' })
@View({
	template: `
		<h2>Dashboard</h2>
	`
})

export class DashboardComponent {
	constructor() {
		var map1 = Map({a:1, b:2, c:3});
		console.log(map1.get('b'));
	}
}