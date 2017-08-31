import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { DropdownComponent } from '../dropdown/dropdown.component'
import { UserService } from '../services/user.service'
import { User } from '../models/user';
@Component({
  selector: 'tree2',
  templateUrl: './tree2.html',
    providers: [UserService]
})
export class tree2Component implements OnInit {
    public numPlayers:number;
    public rows=[];
    public cells=[[0],[0,1],[0,1,2,3],[0,1,2,3,4,5,6,7],[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]];
    public nrows=0;
    public childNumber: number;

    constructor(     
        private _route: ActivatedRoute,
        private _router: Router,
         private _userService:UserService
                     ){
        this.childNumber = 0;    
    }

    ngOnInit(){
   
        
    }
    

    
    create(){
        if(this.childNumber!= 0){
            this.numPlayers = this.childNumber;
            switch(this.childNumber){
                case 1:
                    this.rows= [];
                    this.nrows=0;
                    break;
                case 2:
                    this.rows= [0,1];
                    this.nrows=2;
                    break;
                case 3:
                case 4:
                    this.rows= [0,1,2];
                    this.nrows=3;
                    break;
                case 5:
                case 6:
                case 7:
                case 8:
                    this.rows= [0,1,2,3];
                    this.nrows=4;
                    break;
               }
           
        }
        
    }
    onSubmit(){
      
       
    }
    
    
}
