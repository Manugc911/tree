import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserDetailComponent } from './user-detail/user-detail.component';
import{ UserListComponent } from './user-list/user-list.component';
import {UserAddComponent } from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { treeComponent } from './tree/tree.component';
import { tree2Component } from './tree2/tree2.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes =[
    {path: '', component: UserListComponent},
    {path: 'login', component: LoginComponent},
    {path: 'tree', component: treeComponent},
    {path: 'tree2', component: tree2Component},
    
    {path:'user/:id',component: UserDetailComponent},
    {path:'create-player', component: UserAddComponent},
    {path:'edit-player/:id', component: UserEditComponent},
    {path:'', component: UserListComponent},
    {path:'drop', component: DropdownComponent}
    
    
    
];


export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);