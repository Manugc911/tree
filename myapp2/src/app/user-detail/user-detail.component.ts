import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.html',
    providers: [UserService]
    
})

export class UserDetailComponent implements OnInit{
    public user:User;
    public errorMessage:string;
    constructor(
        private _userService: UserService,
        private _route: ActivatedRoute,
        private _router: Router
         ){
    }   
    ngOnInit(){
            this.getUser();
    }
    getUser(){
        this._route.params.forEach((params: Params) => {
            let id = params["id"];
            this._userService.getUser(id).subscribe(
                response =>{
                    this.user = response.user;
                    console.log(this.user);
                    if(!this.user){
                        this._router.navigate(["/user/",id]);
                    }
                },
                error =>{
                    this.errorMessage = <any>error;
                    if(this.errorMessage != null){
                        console.log(this.errorMessage);
                        alert("Error en la peticion");
                    }
                }
            );
        });
    }
}

