import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() titlePost : string;
  @Input() contentPost : string;
  @Input() datePost : string;
  @Input() lovePost: number;

  constructor() { }

  ngOnInit() {
  }

  getClass(){
  	if (this.lovePost>=1){
  		return 'list-group-item list-group-item-success';
  	}
  	else if (this.lovePost<=-1){
  		return 'list-group-item list-group-item-danger';
  	}
  	else{
  		return 'list-group-item';
  	}

  };
   onLove(){
  	this.lovePost += 1;
  };
  onNoLove(){
  	this.lovePost -= 1;
  }

}
