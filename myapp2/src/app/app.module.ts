import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http'; 
import { appRoutingProviders, routing  } from './app.routing';
import { AlertModule } from 'ngx-bootstrap';


import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { treeComponent } from './tree/tree.component';
import { tree2Component } from './tree2/tree2.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
      AppComponent,
      UserListComponent,
      UserDetailComponent,
      UserAddComponent,
      UserEditComponent,
      treeComponent,
      tree2Component,
      DropdownComponent,
      LoginComponent
  ],
  imports: [
      AlertModule.forRoot(),
      BrowserModule,
      FormsModule,
      HttpModule,
      routing
  ],
  providers: [
        appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
