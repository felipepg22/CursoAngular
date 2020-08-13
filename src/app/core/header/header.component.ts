import { Component } from '@angular/core';

import { UserService } from '../user/user.service';
import { Observable } from 'rxjs';
import { User } from '../user/user';

@Component({
    selector: 'ap-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    private user$:Observable<User>;// $ -> Indica que vai receber um Observable
    

    constructor(userService:UserService){
        
        this.user$ = userService.getUser();       
        
    }
}