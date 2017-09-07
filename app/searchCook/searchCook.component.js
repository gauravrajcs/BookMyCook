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
var searchDataservice_1 = require("./searchDataservice");
var searchDataservice_2 = require("./searchDataservice");
var searchCookComponent = (function () {
    function searchCookComponent(http, _router, _dataService) {
        this.http = http;
        this._router = _router;
        this._dataService = _dataService;
        this.selectedCity = new searchDataservice_2.City(0, 'Bengluru');
        this.search = {
            "area": "Bengluru",
            "level": "",
            "querytext": ""
        };
        this.cities = this._dataService.getCities();
        this.router = _router;
    }
    searchCookComponent.prototype.onSelect = function (cityid) {
        this.areas = this._dataService.getAreas().filter(function (item) { return item.cityid == cityid; });
    };
    searchCookComponent.prototype.onSubmit = function () {
        console.log(this.search);
        this.http.post('https://us-central1-bookmycook-d8e9b.cloudfunctions.net/signup', JSON.stringify(this.search))
            .subscribe();
        alert("searching data");
        this.router.navigateByUrl('/cooksearchdata');
    };
    searchCookComponent = __decorate([
        core_1.Component({
            selector: 'cook-search',
            templateUrl: '/app/searchCook/searchCook.component.html',
            styleUrls: ['app/searchCook/searchCook.component.css'],
            providers: [searchDataservice_1.DataService],
        }),
        __metadata("design:paramtypes", [http_1.Http, router_1.Router, searchDataservice_1.DataService])
    ], searchCookComponent);
    return searchCookComponent;
}());
exports.searchCookComponent = searchCookComponent;
//# sourceMappingURL=searchCook.component.js.map