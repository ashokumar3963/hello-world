import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

 @Input('isFavorite') isFavorite:boolean;
  constructor() { }


  @Output() change = new EventEmitter();

  ngOnInit() {
  }

  onclick(){
    this.isFavorite = !this.isFavorite;
    this.change.emit({newValue : this.isFavorite});
  }

}
