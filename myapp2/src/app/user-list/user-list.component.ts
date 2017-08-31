import {Component, OnInit} from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'user-list',
    templateUrl: 'user-list.html',
    providers:[UserService]
})

export class UserListComponent implements OnInit{
    public title: String;
    public errorMessage;
    public users:User[];
    public loading: boolean;
    public confirmado:string;
    
    constructor(
        private _userService: UserService,
         private _router: Router
    ){
        this.title = "Listado de Usuarios:";
        this.loading = true;
        this.confirmado = null;

    }
    
    ngOnInit(){
        this.getUsers();
        
    }
    

    getUsers(){
        
        
        this._userService.getUsers().subscribe(
            result=> {
    
                this.users = result.user;
                this._router.navigate(["/"]);
                if(!this.users){
                    alert("Error en el servidorr");
                }else{
                    this.loading= false;
                }
            },
            error=>{
                this.errorMessage = <any>error;
                if(this.errorMessage !=null) {
                    alert("errorazo!"+ this.errorMessage);
                    console.log(this.errorMessage);
                }
            }
        )
    }
    
    deleteUser(id:string){
       this._userService.deleteUser(id).subscribe(
        result=>{
            this.getUsers();
            console.log("Usuario con id:" +id);
        },
       error=>{
            this.errorMessage = <any>error;
                if(this.errorMessage !=null) {
                    alert("errorazo!"+ this.errorMessage);
                    console.log(this.errorMessage);
                }
       }
       )
        
    }
    
    showConfirmar(id:string){
        this.confirmado= id;
    }        
    hideConfirmar(id:string){
        this.confirmado = null;
    }

}