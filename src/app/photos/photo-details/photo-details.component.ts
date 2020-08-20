import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ChildActivationStart } from '@angular/router';
import { Observable } from 'rxjs';

import { Photo } from '../photo/Photo';
import { PhotoService } from '../photo/photo.service';

@Component({

    templateUrl:'./photo-details.component.html',
    styleUrls: ['photo-details.css']
})
export class PhotoDetailsComponent implements OnInit {

    photo$:Observable<Photo>;
    photoId:number;
    
    constructor(
        private route:ActivatedRoute,
        private photoService:PhotoService
        ){}

    ngOnInit(): void {
        
        this.photoId = this.route.snapshot.params.photoId;//Pega o valor de id que esta na barra de endereço
        
        this.photo$ = this.photoService.findById(this.photoId);
       
        
    }
} 