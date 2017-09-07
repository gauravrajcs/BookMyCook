"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var GetCookSearchComponent = (function () {
    function GetCookSearchComponent(http, _router) {
        this.http = http;
        this.data = {};
        this.router = _router;
    }
    // name: string = "axs";
    GetCookSearchComponent.prototype.onSubmit = function () {
        // console.log(this.data);
        // this.http.post('https://us-central1-bookmycook-d8e9b.cloudfunctions.net/signup', JSON.stringify(this.data))
        //   .subscribe();
        //   alert("Signed Successfully!! Go to Login Page");
        //   this.router.navigateByUrl('/login');
    };
    GetCookSearchComponent = __decorate([
        core_1.Component({
            templateUrl: '/app/searchCook/getSearchCook.component.html'
        }),
        __metadata("design:paramtypes", [http_1.Http, router_1.Router])
    ], GetCookSearchComponent);
    return GetCookSearchComponent;
}());
exports.GetCookSearchComponent = GetCookSearchComponent;
//# sourceMappingURL=getSearchCook.component.js.map