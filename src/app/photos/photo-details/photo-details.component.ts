import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Photo } from '../photo/Photo';
import { PhotoService } from '../photo/photo.service';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { UserService } from 'src/app/core/user/user.service';

@Component({

    templateUrl:'./photo-details.component.html'
    
})
export class PhotoDetailsComponent implements OnInit {

    photo$:Observable<Photo>;
    photoId:number;
    
    constructor(
        private route:ActivatedRoute,
        private photoService:PhotoService,
        private router:Router,
        private alertService:AlertService,
        private userService:UserService
        ){}

    ngOnInit(): void {
        
        this.photoId = this.route.snapshot.params.photoId;//Pega o valor de id que esta na barra de endereço
        
        this.photo$ = this.photoService.findById(this.photoId);

        this.photo$.subscribe(() => {}, err => {

            console.log(err);
            this.router.navigate(['not-found']);
        })
       
        
    }

    remove(){

        this.photoService
            .removePhoto(this.photoId)
            .subscribe(
                () => {
                
                    this.alertService.success("Photo removed",true);
                    this.router.navigate(['/user',this.userService.getUserName()]);

            },
                err => {

                    console.log(err);
                    this.alertService.warning("Could not delete photo!",true);
                }
            );
    }
} 