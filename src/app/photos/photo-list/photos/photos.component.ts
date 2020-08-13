import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Photo } from '../../photo/Photo';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {

  @Input() photos:Photo[] = [];
  rows = [];
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    
    if(changes.photos)
    {
      this.rows = this.groupColumns(this.photos);
    }
  }

  

  groupColumns(photos:Photo[]){

    const newRows =[];
    for (let i = 0;i<this.photos.length;i+=3){

      newRows.push(this.photos.slice(i,i+3));
    }

    return newRows;
  }

}
