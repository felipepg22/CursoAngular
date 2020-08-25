import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Photo } from "./Photo";
import { PhotoComment } from './photo-comment';

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

    findById(photoId:number){

        return this.http.get<Photo>(API + '/photos/'+photoId);
    }

    getComments(photoId:number){

        return this.http.get<PhotoComment[]>(API + '/photos/' + photoId + '/comments');

    }

    addComment(photoId:number,commentText:string){

        return this.http.post(API + '/photos/' + photoId + '/comments',{commentText});
    }

    removePhoto(photoId:number){

        return this.http.delete(API + '/photos/' + photoId);
    }

    like(photoId:number){

        return this.http
                   .post(API + '/photos/'+photoId+'/like',{},{ observe:'response' })
                   .pipe(map(res=>true))
                   .pipe(catchError(err=>{

                        return err.status == '304'? of(false):throwError(err);
                   }));//of => Retorna um observable
                        // Erro 304 vem do backend dizendo que a foto ja foi curtida pelo usuário
                   
    }

}