import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { UserService } from '../services/user.service'
import { User } from '../models/user';
@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.html',
    providers: [UserService]
})
export class DropdownComponent implements OnInit {
    public Users: User[];
    public errorMessage;
    public Scores = [0,1,2,3,4,5,6,7,8,9,10];
    constructor(     
        private _route: ActivatedRoute,
        private _router: Router,
         private _userService:UserService
                     ){


    }
    
    ngOnInit(){
   
        this.getUsers();
    }
    
    getUsers(){
        this._userService.getUsers().subscribe(
            result=> {
    
                this.Users = result.user;
            
               // this._router.navigate(["/"]);
                if(!this.Users){
                    alert("Error en el servidorr");
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
    
    
}
