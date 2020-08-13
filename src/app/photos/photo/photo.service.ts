import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Photo } from "./Photo";
import { Observable } from 'rxjs';

const API = 'http://localhost:3000';

@Injectable({providedIn: 'root'})//Pega os valores da raíz
export class PhotoService {

    
    constructor(private http:HttpClient){}

    listFromUser(userName:string):Observable<Photo[]>{

        return this.http
                .get<Photo[]>(API + '/'+userName+'/photos');
        
    }

    listFromUserPaginated(userName:string,page:number):Observable<Photo[]>{

        const params = new HttpParams().append('page',page.toString());
        
        return this.http
                .get<Photo[]>(API + '/'+userName+'/photos',{ params });
        
    }

}