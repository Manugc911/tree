import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { UserService } from '../services/user.service'
import { User } from '../models/user';
@Component({
  selector: 'login',
  templateUrl: './login.html',
    providers: [UserService]
})
export class LoginComponent implements OnInit {

public user: User;
public errorMessage;

    constructor(     
        private _route: ActivatedRoute,
        private _router: Router,
         private _userService:UserService
                     ){
            this.user = new User("",0,0,"","");

    }

    
    ngOnInit(){
        
    }
    getUser(){
        this._route.params.forEach((params: Params) => {
            let id = params["id"];
            this._userService.getUser(id).subscribe(
                response =>{
                    this.user = response.user;
                    if(!this.user){
                        this._router.navigate(["/"]);
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
    
    onSubmit(){
        //this.getFavorito();
        this._userService.checkPass(this.user.userName).subscribe(
                response =>{
                    this.user = response.user;
                    if(!this.user){
                        this._router.navigate(["/"]);
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
        
        
        this._route.params.forEach((params: Params) => {
            let id = params['id'];
            this._userService.editUser(id,this.user).subscribe(
            response => {

                if(!this.user){
                    alert("Error en el servidor");
                }else{
                   
                    this._router.navigate(['/user/',this.user._id]);
                }
            },
            error =>{
                this.errorMessage = <any>error;
                if(this.errorMessage !=null) {
                    alert("errorazo!"+ this.errorMessage);
                    console.log(this.errorMessage);        
                }
            });
        });
    }
    
    
}