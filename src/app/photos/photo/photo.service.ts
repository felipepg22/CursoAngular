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

    upload(description:string,allowComments:boolean,file:File){

        const formData = new FormData();// Por ter um file precisa ser um FormData

        formData.append('description',description);
        formData.append('allowComments',allowComments ? 'true':'false');
        formData.append('imageFile',file);

        return this.http.post(API + '/photos/upload',formData);
    }

    findById(id:string){

        return this.http.get<Photo>(API + '/photos/'+id);
    }

}