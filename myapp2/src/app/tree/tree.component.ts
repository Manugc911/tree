import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { DropdownComponent } from '../dropdown/dropdown.component'
import { UserService } from '../services/user.service'
import { User } from '../models/user';
@Component({
  selector: 'tree',
  templateUrl: './tree.html',
    providers: [UserService]
})
export class treeComponent implements OnInit {
    public numPlayers:number;
    public rows:number;
    public user: User;
    public childNumber: number;
    public errorMessage;
    public dropVisible;
    constructor(     
        private _route: ActivatedRoute,
        private _router: Router,
         private _userService:UserService
                     ){
        this.childNumber = 0;    
        this.dropVisible= false;
    }
    
    ngOnInit(){
        this.refreshTree();
        
    }
    onSubmit(){
      
       
    }
    
    refreshTree(){
        document.getElementById("tree").innerHTML ="";        
    
        if(this.childNumber!= 0){
            this.numPlayers = this.childNumber;
            switch(this.childNumber){
                case 1:
                    this.rows= 0;
                    break;
                case 2:
                    this.rows= 2;
                    break;
                case 3:
                case 4:
                    this.rows= 3;
                    break;
                case 5:
                case 6:
                case 7:
                case 8:
                    this.rows= 4;
                    break;
               }


           var num = 0;
            for(var i=0; i<this.rows ;i++){


                if(i == 0){
                 var mitad0 = document.createElement("div");
                 mitad0.setAttribute("style","background-color:transparent;height:50px;width:100%;float:left;");
                 mitad0.setAttribute("id","start"+i);
                 document.getElementById("tree").appendChild(mitad0);
                 mitad0.appendChild(this.createRow(true,i,0));
                }
                if(i>0){

                        for( var n =0; n<Math.pow(2,i);n++){ 
                            num++;
                            var mitad1 =document.createElement("div");
                            mitad1.setAttribute("id","start"+(num));
                            mitad1.setAttribute("style","background-color:transparent; height:50px;width:"+100/Math.pow(2,i)+"%;float:left;margin-top:60px;");
                            if(i < this.rows-1)
                                mitad1.appendChild(this.createRow(true,i,n));
                            else
                                mitad1.appendChild(this.createRow(false,i,n));

                            document.getElementById("tree").appendChild(mitad1);
                        }

                }
            }
            var dropButton = document.createElement("div");  //aki
            dropButton.innerHTML="{{this.childNumber}}";


            document.getElementById("row1cell1").appendChild(dropButton);    
        }
    }
    
  
    
    
    createRow(flechas:boolean,Nrow:number,Ncell:number ){

                var box = document.createElement("div");
                var row = document.createElement("div");
                row.setAttribute("id","row"+Nrow+"cell"+Ncell);
                row.setAttribute("class","square cell"+Ncell+"row"+Nrow);
                box.appendChild(row);
                if(flechas == true){
                    var arrows = document.createElement("div");
                    arrows.setAttribute("id","arrows");
                    arrows.setAttribute("class","row");
                    arrows.setAttribute("style","width:100%;margin-left: 44%;");
                    var patas = document.createElement("span");

                    var pata1 = document.createElement("img");
                    pata1.setAttribute("src","../../assets/images/arrow1.png");
                    pata1.setAttribute("width","40px");

                    var pata2 = document.createElement("img");
                    pata2.setAttribute("src","../../assets/images/arrow2.png");
                    pata2.setAttribute("width","40px");

                    patas.appendChild(pata2);
                    patas.appendChild(pata1);

                    arrows.appendChild(patas);
                    box.appendChild(arrows);
                    }
                    
                return box;
        
    }
}
