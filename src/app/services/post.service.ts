//  import 'rxjs/add/operator/map';
//  import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../model/Post';

@Injectable()
export class PostService{

    private url: string = "https://jsonplaceholder.typicode.com/posts";

    constructor(private http: HttpClient){

    }

    /* Retorna os posts via método GET */
    public getPosts(){
        return this.http.get<Post[]>(this.url);
    }

    /**
     * FORMA ANTIGA - DEPRECATED
     */
    /*constructor(private http: Http){
        console.log('PostService initialized...')
    }*/

    /* Retorna os posts via método GET */
    /*public getPosts(){
        return this.http.get(this.url).map(response => response.json());
    }*/

}