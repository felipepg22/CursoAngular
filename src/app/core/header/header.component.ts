import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../user/user.service';
import { Observable } from 'rxjs';
import { User } from '../user/user';

@Component({
    selector: 'ap-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    user$:Observable<User>;// $ -> Indica que vai receber um Observable
    
    

    constructor(
        private userService:UserService,
        private router:Router){
        
        this.user$ = userService.getUser();
        
        
    }

    logout(){

        this.userService.logout();
        this.router.navigate(['']);
    }
}