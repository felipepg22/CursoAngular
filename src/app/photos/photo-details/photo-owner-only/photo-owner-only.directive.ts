import { Directive, ElementRef, Renderer, Input, OnInit } from '@angular/core';

import { UserService } from 'src/app/core/user/user.service';
import { Photo } from '../../photo/Photo';

@Directive({

    selector : '[photoOwnerOnly]'
})
export class PhotoOwnerOnlyDirective implements OnInit {

    @Input() ownedPhoto:Photo

    constructor(
        private element:ElementRef<any>,
        private render:Renderer,
        private userService:UserService
    ){}

    ngOnInit(): void {
        
      this.userService
          .getUser()
          .subscribe(user => {

            if(!user || user.id != this.ownedPhoto.userId){

                this.render.setElementStyle(this.element.nativeElement,'display','none');
            }
          } );

    }
}