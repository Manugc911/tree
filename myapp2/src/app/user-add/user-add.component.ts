import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { UserService } from '../services/user.service'
import { User } from '../models/user';
@Component({
  selector: 'user-add',
  templateUrl: './user-add.html',
    providers: [UserService]
})
export class UserAddComponent implements OnInit {
    public titleSection:string;
    public user: User;
    public errorMessage;
    constructor(     
        private _route: ActivatedRoute,
        private _router: Router,
         private _userService:UserService
                     ){
            this.titleSection="Crear un jugador:";
        
    }
    
    ngOnInit(){
        this.user = new User("",0,0,"");
    }
    onSubmit(){
        console.log(this.user);
        this._userService.addUser(this.user).subscribe(
        response => {
            
            if(!this.user){
                alert("Error en el servidor");
            }else{
                this.user = response.user;
                this._router.navigate(['/user',this.user._id]);
            }
        },
        error =>{
            this.errorMessage = <any>error;
            if(this.errorMessage !=null) {
                alert("errorazo!"+ this.errorMessage);
                console.log(this.errorMessage);        
            }
        });
    }
}
