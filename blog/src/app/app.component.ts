import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	 posts = [
  	{
  		title:'Mon premier Post',
  		content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in justo tortor. Donec dapibus porta libero vitae fringilla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer non risus nec augue egestas luctus. Mauris cursus non tellus at feugiat. Quisque eu mi porttitor ante fringilla malesuada. Aliquam erat volutpat. In enim nibh, pulvinar sit amet dui non, faucibus gravida lacus. Vestibulum vel massa vitae lacus ornare lobortis ac vitae sapien.',
  		loveIts:1,
  		createdAt:new Date()
  	},

  	{
  		title:'Mon deuxième Post',
  		content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in justo tortor. Donec dapibus porta libero vitae fringilla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer non risus nec augue egestas luctus. Mauris cursus non tellus at feugiat. Quisque eu mi porttitor ante fringilla malesuada. Aliquam erat volutpat. In enim nibh, pulvinar sit amet dui non, faucibus gravida lacus. Vestibulum vel massa vitae lacus ornare lobortis ac vitae sapien.',
  		loveIts:-1,
  		createdAt:new Date()
  	},

  	{
  		title:'Mon troisième Post',
  		content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in justo tortor. Donec dapibus porta libero vitae fringilla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer non risus nec augue egestas luctus. Mauris cursus non tellus at feugiat. Quisque eu mi porttitor ante fringilla malesuada. Aliquam erat volutpat. In enim nibh, pulvinar sit amet dui non, faucibus gravida lacus. Vestibulum vel massa vitae lacus ornare lobortis ac vitae sapien.',
  		loveIts:0,
  		createdAt:new Date()
  	}
  ];

  onLove(){
  	console.log("ça va là dedans ?");
  }

}
