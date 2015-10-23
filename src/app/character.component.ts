import {Component, View} from 'angular2/angular2';
import {MainService} from './main.service';

@Component({ selector: 'my-character'})
@View({
	template: `
		<h2>Character</h2>
	`
})

export class CharacterComponent {
	constructor(public _mainService: MainService){
    console.log('Hello', this._mainService);
	}
}
