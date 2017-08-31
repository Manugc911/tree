webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<header id=\"header\">\n    <a class=\"btn-add-favorito font-Julius\" [routerLink]=\"['/create-player']\">New User</a>\n    <a class=\"btn-tree font-Julius\" [routerLink]=\"['/tree2']\">Tree</a>\n    <div class=\"title-subtitle\">\n\n        <img src=\"../assets/images/angular-icon-1.svg\" id=\"logo\">\n\n        <h1><a [routerLink]=\"['/']\" class=\"font-Julius\">{{title | uppercase}}</a></h1>\n\n        <p class=\"font-amatic\">{{description}}</p>\n    </div>\n    \n\n    <div class=\"clearfix\"></div>\n</header>\n<section class=\"main\">\n    <router-outlet></router-outlet>\n    <div class=\"clearfix\"></div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(_route, _router) {
        this._route = _route;
        this._router = _router;
        this.title = 'Bookmarks Keeper';
        this.description = "Curso de NodeJS y Angular2";
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_list_user_list_component__ = __webpack_require__("../../../../../src/app/user-list/user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_detail_user_detail_component__ = __webpack_require__("../../../../../src/app/user-detail/user-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_add_user_add_component__ = __webpack_require__("../../../../../src/app/user-add/user-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_edit_user_edit_component__ = __webpack_require__("../../../../../src/app/user-edit/user-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__tree_tree_component__ = __webpack_require__("../../../../../src/app/tree/tree.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__tree2_tree2_component__ = __webpack_require__("../../../../../src/app/tree2/tree2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dropdown_dropdown_component__ = __webpack_require__("../../../../../src/app/dropdown/dropdown.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__user_list_user_list_component__["a" /* UserListComponent */],
            __WEBPACK_IMPORTED_MODULE_8__user_detail_user_detail_component__["a" /* UserDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_9__user_add_user_add_component__["a" /* UserAddComponent */],
            __WEBPACK_IMPORTED_MODULE_10__user_edit_user_edit_component__["a" /* UserEditComponent */],
            __WEBPACK_IMPORTED_MODULE_11__tree_tree_component__["a" /* treeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__tree2_tree2_component__["a" /* tree2Component */],
            __WEBPACK_IMPORTED_MODULE_13__dropdown_dropdown_component__["a" /* DropdownComponent */],
            __WEBPACK_IMPORTED_MODULE_14__login_login_component__["a" /* LoginComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["a" /* AlertModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing__["b" /* routing */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* appRoutingProviders */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_detail_user_detail_component__ = __webpack_require__("../../../../../src/app/user-detail/user-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_list_user_list_component__ = __webpack_require__("../../../../../src/app/user-list/user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_add_user_add_component__ = __webpack_require__("../../../../../src/app/user-add/user-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_edit_user_edit_component__ = __webpack_require__("../../../../../src/app/user-edit/user-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tree_tree_component__ = __webpack_require__("../../../../../src/app/tree/tree.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tree2_tree2_component__ = __webpack_require__("../../../../../src/app/tree2/tree2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dropdown_dropdown_component__ = __webpack_require__("../../../../../src/app/dropdown/dropdown.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");









var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__user_list_user_list_component__["a" /* UserListComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */] },
    { path: 'tree', component: __WEBPACK_IMPORTED_MODULE_5__tree_tree_component__["a" /* treeComponent */] },
    { path: 'tree2', component: __WEBPACK_IMPORTED_MODULE_6__tree2_tree2_component__["a" /* tree2Component */] },
    { path: 'user/:id', component: __WEBPACK_IMPORTED_MODULE_1__user_detail_user_detail_component__["a" /* UserDetailComponent */] },
    { path: 'create-player', component: __WEBPACK_IMPORTED_MODULE_3__user_add_user_add_component__["a" /* UserAddComponent */] },
    { path: 'edit-player/:id', component: __WEBPACK_IMPORTED_MODULE_4__user_edit_user_edit_component__["a" /* UserEditComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__user_list_user_list_component__["a" /* UserListComponent */] },
    { path: 'drop', component: __WEBPACK_IMPORTED_MODULE_7__dropdown_dropdown_component__["a" /* DropdownComponent */] }
];
var appRoutingProviders = [];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/dropdown/dropdown.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DropdownComponent = (function () {
    function DropdownComponent(_route, _router, _userService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this.Scores = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    }
    DropdownComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    DropdownComponent.prototype.getUsers = function () {
        var _this = this;
        this._userService.getUsers().subscribe(function (result) {
            _this.Users = result.user;
            // this._router.navigate(["/"]);
            if (!_this.Users) {
                alert("Error en el servidorr");
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                alert("errorazo!" + _this.errorMessage);
                console.log(_this.errorMessage);
            }
        });
    };
    return DropdownComponent;
}());
DropdownComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'dropdown',
        template: __webpack_require__("../../../../../src/app/dropdown/dropdown.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _c || Object])
], DropdownComponent);

var _a, _b, _c;
//# sourceMappingURL=dropdown.component.js.map

/***/ }),

/***/ "../../../../../src/app/dropdown/dropdown.html":
/***/ (function(module, exports) {

module.exports = "<div>User:\r\n<select name=\"user\"  >\r\n    <option value=\"\">-</option>\r\n    <option *ngFor=\"let User of Users\" value=\"{{User.userName}}\">{{User.userName}}</option>\r\n</select>\r\n    </div>\r\n<div>\r\n    \r\nScore:\r\n<select name=\"score\">\r\n    <option value=\"\">-</option>\r\n    <option *ngFor=\"let Score of Scores\" value=\"{{Score}}\">{{Score}}</option>\r\n    \r\n\r\n</select>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__("../../../../../src/app/models/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(_route, _router, _userService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]("", 0, 0, "", "");
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.getUser = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var id = params["id"];
            _this._userService.getUser(id).subscribe(function (response) {
                _this.user = response.user;
                if (!_this.user) {
                    _this._router.navigate(["/"]);
                }
            }, function (error) {
                _this.errorMessage = error;
                if (_this.errorMessage != null) {
                    console.log(_this.errorMessage);
                    alert("Error en la peticion");
                }
            });
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        //this.getFavorito();
        this._userService.checkPass(this.user.userName).subscribe(function (response) {
            _this.user = response.user;
            if (!_this.user) {
                _this._router.navigate(["/"]);
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log(_this.errorMessage);
                alert("Error en la peticion");
            }
        });
        this._route.params.forEach(function (params) {
            var id = params['id'];
            _this._userService.editUser(id, _this.user).subscribe(function (response) {
                if (!_this.user) {
                    alert("Error en el servidor");
                }
                else {
                    _this._router.navigate(['/user/', _this.user._id]);
                }
            }, function (error) {
                _this.errorMessage = error;
                if (_this.errorMessage != null) {
                    alert("errorazo!" + _this.errorMessage);
                    console.log(_this.errorMessage);
                }
            });
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'login',
        template: __webpack_require__("../../../../../src/app/login/login.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div id=\"divLogin\">\r\n    <h2 id=\"titleLogin\">Login</h2>\r\n    <label for=\"nameLogin\">Username: </label>\r\n    <input type=\"text\" name=\"nameLogin\" id=\"nameLogin\" placeholder=\"Your Username\" /><br/>\r\n    <label for=\"passLogin\">Password: </label>\r\n    <input type=\"password\" name=\"passLogin\" id=\"passLogin\" placeholder=\"******\" />\r\n    <input type=\"button\" id=\"buttonGo\" class=\"button buttonB\" value=\"Let's go!\" (click)=\"go()\"/>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(userName, wins, totalGames, _id, pass) {
        this.userName = userName;
        this.wins = wins;
        this.totalGames = totalGames;
        this._id = _id;
        this.pass = pass;
        /*this.title= title;
        this.description = description;
        this.url = url;*/
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
        this.url = 'http://localhost:3456/api/';
    }
    UserService.prototype.getUserRL = function () {
        return this._http.get(this.url + "getUserRL").map(function (data) { return data.json(); });
    };
    UserService.prototype.getUsers = function () {
        return this._http.get(this.url + 'users').map(function (res) { return res.json(); });
    };
    UserService.prototype.getUser = function (id) {
        return this._http.get(this.url + 'user/' + id).
            map(function (res) { return res.json(); });
    };
    UserService.prototype.addUser = function (user) {
        var json = JSON.stringify(user);
        var params = json;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/json' });
        return this._http.post(this.url + 'user/', params, { headers: headers }).map(function (res) { return res.json(); });
    };
    UserService.prototype.deleteUser = function (id) {
        return this._http.delete(this.url + 'user/' + id).map(function (res) { return res.json(); });
    };
    UserService.prototype.editUser = function (id, user) {
        var json = JSON.stringify(user);
        var params = json;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/json' });
        return this._http.put(this.url + 'user/' + id, params, { headers: headers }).map(function (res) { return res.json(); });
    };
    UserService.prototype.checkPass = function (userName) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/json' });
        return this._http.get(this.url + 'checkPass/' + userName).map(function (res) { return res.json(); });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/tree/tree.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return treeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var treeComponent = (function () {
    function treeComponent(_route, _router, _userService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this.childNumber = 0;
        this.dropVisible = false;
    }
    treeComponent.prototype.ngOnInit = function () {
        this.refreshTree();
    };
    treeComponent.prototype.onSubmit = function () {
    };
    treeComponent.prototype.refreshTree = function () {
        document.getElementById("tree").innerHTML = "";
        if (this.childNumber != 0) {
            this.numPlayers = this.childNumber;
            switch (this.childNumber) {
                case 1:
                    this.rows = 0;
                    break;
                case 2:
                    this.rows = 2;
                    break;
                case 3:
                case 4:
                    this.rows = 3;
                    break;
                case 5:
                case 6:
                case 7:
                case 8:
                    this.rows = 4;
                    break;
            }
            var num = 0;
            for (var i = 0; i < this.rows; i++) {
                if (i == 0) {
                    var mitad0 = document.createElement("div");
                    mitad0.setAttribute("style", "background-color:transparent;height:50px;width:100%;float:left;");
                    mitad0.setAttribute("id", "start" + i);
                    document.getElementById("tree").appendChild(mitad0);
                    mitad0.appendChild(this.createRow(true, i, 0));
                }
                if (i > 0) {
                    for (var n = 0; n < Math.pow(2, i); n++) {
                        num++;
                        var mitad1 = document.createElement("div");
                        mitad1.setAttribute("id", "start" + (num));
                        mitad1.setAttribute("style", "background-color:transparent; height:50px;width:" + 100 / Math.pow(2, i) + "%;float:left;margin-top:60px;");
                        if (i < this.rows - 1)
                            mitad1.appendChild(this.createRow(true, i, n));
                        else
                            mitad1.appendChild(this.createRow(false, i, n));
                        document.getElementById("tree").appendChild(mitad1);
                    }
                }
            }
            var dropButton = document.createElement("div"); //aki
            dropButton.innerHTML = "{{this.childNumber}}";
            document.getElementById("row1cell1").appendChild(dropButton);
        }
    };
    treeComponent.prototype.createRow = function (flechas, Nrow, Ncell) {
        var box = document.createElement("div");
        var row = document.createElement("div");
        row.setAttribute("id", "row" + Nrow + "cell" + Ncell);
        row.setAttribute("class", "square cell" + Ncell + "row" + Nrow);
        box.appendChild(row);
        if (flechas == true) {
            var arrows = document.createElement("div");
            arrows.setAttribute("id", "arrows");
            arrows.setAttribute("class", "row");
            arrows.setAttribute("style", "width:100%;margin-left: 44%;");
            var patas = document.createElement("span");
            var pata1 = document.createElement("img");
            pata1.setAttribute("src", "../../assets/images/arrow1.png");
            pata1.setAttribute("width", "40px");
            var pata2 = document.createElement("img");
            pata2.setAttribute("src", "../../assets/images/arrow2.png");
            pata2.setAttribute("width", "40px");
            patas.appendChild(pata2);
            patas.appendChild(pata1);
            arrows.appendChild(patas);
            box.appendChild(arrows);
        }
        return box;
    };
    return treeComponent;
}());
treeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'tree',
        template: __webpack_require__("../../../../../src/app/tree/tree.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _c || Object])
], treeComponent);

var _a, _b, _c;
//# sourceMappingURL=tree.component.js.map

/***/ }),

/***/ "../../../../../src/app/tree/tree.html":
/***/ (function(module, exports) {

module.exports = "<br/>\r\nNumero de Jugadores:<input type=\"number\" [(ngModel)]=\"childNumber\" >\r\nRondas: {{this.rows}}\r\n<input type=\"button\" (click)=\"refreshTree()\" value=\"Crear\"/>\r\n<div id=\"tree\"  style=\"position:absolute\">\r\n\r\n</div>\r\n\r\n<dropdown *ngIf=\"dropVisible\"></dropdown>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/tree2/tree2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tree2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var tree2Component = (function () {
    function tree2Component(_route, _router, _userService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this.rows = [];
        this.cells = [[0], [0, 1], [0, 1, 2, 3], [0, 1, 2, 3, 4, 5, 6, 7], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]];
        this.nrows = 0;
        this.childNumber = 0;
    }
    tree2Component.prototype.ngOnInit = function () {
    };
    tree2Component.prototype.create = function () {
        if (this.childNumber != 0) {
            this.numPlayers = this.childNumber;
            switch (this.childNumber) {
                case 1:
                    this.rows = [];
                    this.nrows = 0;
                    break;
                case 2:
                    this.rows = [0, 1];
                    this.nrows = 2;
                    break;
                case 3:
                case 4:
                    this.rows = [0, 1, 2];
                    this.nrows = 3;
                    break;
                case 5:
                case 6:
                case 7:
                case 8:
                    this.rows = [0, 1, 2, 3];
                    this.nrows = 4;
                    break;
            }
        }
    };
    tree2Component.prototype.onSubmit = function () {
    };
    return tree2Component;
}());
tree2Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'tree2',
        template: __webpack_require__("../../../../../src/app/tree2/tree2.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _c || Object])
], tree2Component);

var _a, _b, _c;
//# sourceMappingURL=tree2.component.js.map

/***/ }),

/***/ "../../../../../src/app/tree2/tree2.html":
/***/ (function(module, exports) {

module.exports = "<br/> Numero de Usuarios:<input type=\"number\" [(ngModel)]=\"childNumber\"> Rondas: {{this.nrows}}\r\n<input type=\"button\" (click)=\"create()\" value=\"Crear\" />\r\n<div id=\"tree\" style=\"position:absolute\">\r\n\r\n</div>\r\n\r\n<div id=\"row{{i}}\" *ngFor=\"let row of rows;let i = index\">\r\n\r\n    <div id=\"row{{i}}cell{{n}}\" *ngFor=\"let cell of cells[i];let n=index\">\r\n        <div class=\"square\">\r\n    \r\n            <dropdown id=\"dropCell{{n}}\"></dropdown>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!--\r\n<div id=\"start\">\r\n    \r\n    <div id=\"tree\" style=\"position: absolute; \">\r\n        <div style=\"background-color:transparent;height:50px;width:100%;float:left;\" id=\"start0\">\r\n            <div>\r\n                <div id=\"row0cell0\" class=\"square cell0row0\"></div>\r\n                <div id=\"arrows\" class=\"row\" style=\"width:100%;margin-left: 44%;\"><span><img src=\"../../assets/images/arrow2.png\" width=\"40px\"><img src=\"../../assets/images/arrow1.png\" width=\"40px\"></span></div>\r\n            </div>\r\n        </div>\r\n        \r\n        <div id=\"start1\" style=\"background-color:transparent; height:50px;width:50%;float:left;margin-top:60px;\">\r\n            <div>\r\n                <div id=\"row1cell0\" class=\"square cell0row1\"></div>\r\n            </div>\r\n        </div>\r\n        <div id=\"start2\" style=\"background-color:transparent; height:50px;width:50%;float:left;margin-top:60px;\">\r\n            <div>\r\n                <div id=\"row1cell1\" class=\"square cell1row1\">\r\n                    <div>{{this.childNumber}}</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</div>\r\n-->\r\n"

/***/ }),

/***/ "../../../../../src/app/user-add/user-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__("../../../../../src/app/models/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserAddComponent = (function () {
    function UserAddComponent(_route, _router, _userService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this.titleSection = "Crear un jugador:";
    }
    UserAddComponent.prototype.ngOnInit = function () {
        this.user = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]("", 0, 0, "", "");
    };
    UserAddComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.user);
        this._userService.addUser(this.user).subscribe(function (response) {
            if (!_this.user) {
                alert("Error en el servidor");
            }
            else {
                _this.user = response.user;
                _this._router.navigate(['/user', _this.user._id]);
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                alert("errorazo!" + _this.errorMessage);
                console.log(_this.errorMessage);
            }
        });
    };
    return UserAddComponent;
}());
UserAddComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'user-add',
        template: __webpack_require__("../../../../../src/app/user-add/user-add.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _c || Object])
], UserAddComponent);

var _a, _b, _c;
//# sourceMappingURL=user-add.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-add/user-add.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"favorito-box\">\r\n    <h2>{{titleSection}}</h2>\r\n    <form #formFavoritos=\"ngForm\" (ngSubmit)=\"onSubmit();\">\r\n        <label for=\"userName\"> Titulo: </label>\r\n        <p>\r\n            <input id=\"userName\" name=\"userName\" type=\"text\" #title=\"ngModel\" [(ngModel)]=\"user.userName\" required/>\r\n            <span >El titulo es obligatorio.</span>\r\n        </p>\r\n        <!--<label for=\"description\"> Description: </label>\r\n        <p>\r\n*ngIf=\"userName.touched && !userName.valid\"\r\n            <textarea id=\"description\" name=\"description\" type=\"text\" #description=\"ngModel\" [(ngModel)]=\"favorito.description\" required></textarea>\r\n            <span *ngIf=\"description.touched && !description.valid\">La descripcion es obligatorio.</span>\r\n        </p>\r\n        <label for=\"url\"> Url: </label>\r\n        <p>\r\n            <input id=\"url\" name=\"url\" type=\"url\" #url=\"ngModel\" [(ngModel)]=\"favorito.url\"  required />\r\n            <span *ngIf=\"url.touched && !url.valid\">Introduce una Url valida.</span>\r\n        </p>-->\r\n        <input type=\"submit\"/>\r\n    </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/user-detail/user-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserDetailComponent = (function () {
    function UserDetailComponent(_userService, _route, _router) {
        this._userService = _userService;
        this._route = _route;
        this._router = _router;
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    UserDetailComponent.prototype.getUser = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var id = params["id"];
            _this._userService.getUser(id).subscribe(function (response) {
                _this.user = response.user;
                console.log(_this.user);
                if (!_this.user) {
                    _this._router.navigate(["/user/", id]);
                }
            }, function (error) {
                _this.errorMessage = error;
                if (_this.errorMessage != null) {
                    console.log(_this.errorMessage);
                    alert("Error en la peticion");
                }
            });
        });
    };
    return UserDetailComponent;
}());
UserDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'user-detail',
        template: __webpack_require__("../../../../../src/app/user-detail/user-detail.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], UserDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=user-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-detail/user-detail.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"favorito-box\" *ngIf=\"user\">\r\n<h1>{{user.title}}</h1>\r\n    <strong>Player:   </strong>  <span class=\"userName\">{{user.userName}}</span><br/>\r\n    <strong>Wins: </strong><span class=\"wins\">{{user.wins}}</span><br/>\r\n    <strong>Total Games: </strong><span class=\"totalWins\">{{user.totalGames}}</span>\r\n</div>\r\n    <a class=\"btn-volver font-Julius\" [routerLink]=\"['/']\">Volver</a>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/user-edit/user-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__("../../../../../src/app/models/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserEditComponent = (function () {
    function UserEditComponent(_route, _router, _userService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this.titleSection = "Editar un player:";
    }
    UserEditComponent.prototype.ngOnInit = function () {
        this.user = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]("", 0, 0, "", "");
        this.getUser();
    };
    UserEditComponent.prototype.getUser = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var id = params["id"];
            _this._userService.getUser(id).subscribe(function (response) {
                _this.user = response.user;
                if (!_this.user) {
                    _this._router.navigate(["/"]);
                }
            }, function (error) {
                _this.errorMessage = error;
                if (_this.errorMessage != null) {
                    console.log(_this.errorMessage);
                    alert("Error en la peticion");
                }
            });
        });
    };
    UserEditComponent.prototype.onSubmit = function () {
        var _this = this;
        //this.getFavorito();
        this._route.params.forEach(function (params) {
            var id = params['id'];
            _this._userService.editUser(id, _this.user).subscribe(function (response) {
                if (!_this.user) {
                    alert("Error en el servidor");
                }
                else {
                    _this._router.navigate(['/user/', _this.user._id]);
                }
            }, function (error) {
                _this.errorMessage = error;
                if (_this.errorMessage != null) {
                    alert("errorazo!" + _this.errorMessage);
                    console.log(_this.errorMessage);
                }
            });
        });
    };
    return UserEditComponent;
}());
UserEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'user-edit',
        template: __webpack_require__("../../../../../src/app/user-edit/user-edit.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _c || Object])
], UserEditComponent);

var _a, _b, _c;
//# sourceMappingURL=user-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-edit/user-edit.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"favorito-box\">\r\n    <h2>{{titleSection}}</h2>\r\n    <form #formFavoritos=\"ngForm\" (ngSubmit)=\"onSubmit();\">\r\n        <label for=\"title\"> Titulo: </label>\r\n        <p>\r\n            <input id=\"userName\" name=\"userNamein\" type=\"text\" #title=\"ngModel\" [(ngModel)]=\"user.userName\" required/>\r\n            <!--<span *ngIf=\"userName.touched && !userName.valid\">El nombre de usuario es obligatorio.</span>-->\r\n        </p>\r\n        <label for=\"wins\"> Wins: </label>\r\n        <p>\r\n            <input id=\"wins\" type=\"number\" name=\"description\" type=\"text\"  disabled value=\"{{user.wins}}\" />\r\n          \r\n        </p>\r\n        <label for=\"totalGames\"> Total Games: </label>\r\n        <p>\r\n            <input id=\"totalGames\" name=\"number\" type=\"number\"   disabled  value=\"{{user.totalGames}}\"/>\r\n           \r\n        </p>\r\n        <input type=\"submit\"/>\r\n    </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/user-list/user-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserListComponent = (function () {
    function UserListComponent(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
        this.title = "Listado de Usuarios:";
        this.loading = true;
        this.confirmado = null;
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UserListComponent.prototype.getUsers = function () {
        var _this = this;
        this._userService.getUsers().subscribe(function (result) {
            _this.users = result.user;
            _this._router.navigate(["/"]);
            if (!_this.users) {
                alert("Error en el servidorr");
            }
            else {
                _this.loading = false;
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                alert("errorazo!" + _this.errorMessage);
                console.log(_this.errorMessage);
            }
        });
    };
    UserListComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this._userService.deleteUser(id).subscribe(function (result) {
            _this.getUsers();
            console.log("Usuario con id:" + id);
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                alert("errorazo!" + _this.errorMessage);
                console.log(_this.errorMessage);
            }
        });
    };
    UserListComponent.prototype.showConfirmar = function (id) {
        this.confirmado = id;
    };
    UserListComponent.prototype.hideConfirmar = function (id) {
        this.confirmado = null;
    };
    return UserListComponent;
}());
UserListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'user-list',
        template: __webpack_require__("../../../../../src/app/user-list/user-list.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], UserListComponent);

var _a, _b;
//# sourceMappingURL=user-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-list/user-list.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"../../assets/css/styles.css\" />\r\n<div>\r\n\r\n<div class=\"loading\" *ngIf=\"loading\">\r\n    <img src=\"../../assets/images/loader.gif\">\r\n    </div>\r\n    <ul id=\"favoritos-list\" >\r\n        <li class=\"favorito-item\" *ngFor=\"let user of users\">\r\n            <div class=\"content-data\">\r\n                <h4 class=\"font-Julius\">{{user.userName}}</h4>\r\n\r\n                <p class=\"font-Julius\">{{user.wins}}</p>\r\n                <p class=\"buttons\">\r\n                   \r\n            <a [routerLink]=\"['/user/',user._id]\" title=\"Ver {{user.userName}}\"  class=\"btn btn-Ver font-Julius\">\r\n                Ver\r\n            </a>\r\n                    \r\n            <a  [routerLink]=\"['/edit-player/',user._id]\"  title=\"Editar {{user.userName}}\" class=\"btn btn-Editar font-Julius\">\r\n                Editar\r\n            </a>\r\n                \r\n            <a  title=\"Eliminar {{user.userName}} \"  class=\"btn btn-Borrar font-Julius\" (click)=\"showConfirmar(user._id)\">\r\n                Borrar\r\n            </a>\r\n            <div id=\"confirmarBorrar\" *ngIf=\"confirmado == user._id\">\r\n                <p>\r\n                    ¿Seguro que quieres eliminar el marcador?\r\n                    <a  title=\"Eliminar {{user.userName}} \"  class=\"btn btn-Borrar font-Julius\" (click)=\"deleteUser(user._id)\">\r\n                        Si\r\n                    </a>\r\n                    <a  title=\"No eliminar {{user.userName}} \"  class=\"btn btn-Editar font-Julius\" (click)=\"hideConfirmar()\">\r\n                        No\r\n                    </a>\r\n                </p>\r\n                    \r\n            </div>\r\n                \r\n            </div>\r\n        </li>\r\n    </ul>\r\n  \r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map