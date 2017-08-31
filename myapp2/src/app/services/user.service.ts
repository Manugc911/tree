import { Injectable } from '@angular/core';
import { Http,Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';

@Injectable()
export class UserService{
    public url: string;
    constructor(private _http: Http){
        this.url = 'http://localhost:3456/api/';
        
    }
    getUserRL(){
        return this._http.get(this.url+"getUserRL").map(data => data.json());
    }
    getUsers(){
        return this._http.get(this.url+ 'users').map(res =>res.json());
    }
    getUser(id:string){
        return this._http.get(this.url+ 'user/'+ id).
                        map(res=> res.json());
        
    }
    addUser(user: User ){
        let json = JSON.stringify(user);
        let params = json;
        let headers = new Headers({'Content-type':'application/json'}); 
        return this._http.post(this.url+'user/',params,{headers:headers}).map(res =>res.json());
        
    }
    deleteUser(id: string){
        
        return this._http.delete(this.url+'user/'+id).map(
        res=>res.json());
    }
    editUser(id: string,user: User ){
        let json = JSON.stringify(user);
        let params = json;
        let headers = new Headers({'Content-type':'application/json'}); 
        return this._http.put(this.url+'user/'+id,params,{headers:headers}).map(res =>res.json());
    }
    checkPass(userName: string){
        return this._http.get(this.url+'checkPass/'+userName,params,{headers:headers}).map(res =>res.json())
    }
}