import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewUser } from './new-user';
import { environment } from 'src/environments/environment';

const API = environment.ApiUrl;
@Injectable()
export class SignUpService {

    constructor(private http:HttpClient){}

    checkUserNameNotTaken(userName:string){

        return this.http.get(API + '/user/exists/' + userName);
    }

    signUp(newUser:NewUser){

       return this.http.post(API + '/user/signup',newUser);
    }
}