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
var searchDataservice_1 = require("./searchDataservice");
var searchDataservice_2 = require("./searchDataservice");
var searchCookComponent = (function () {
    function searchCookComponent(_dataService) {
        this._dataService = _dataService;
        this.selectedCity = new searchDataservice_2.City(0, 'Bengluru');
        this.cities = this._dataService.getCities();
    }
    searchCookComponent.prototype.onSelect = function (cityid) {
        this.areas = this._dataService.getAreas().filter(function (item) { return item.cityid == cityid; });
    };
    searchCookComponent = __decorate([
        core_1.Component({
            selector: 'cook-search',
            templateUrl: '/app/searchCook/searchCook.component.html',
            styleUrls: ['app/searchCook/searchCook.component.css'],
            providers: [searchDataservice_1.DataService],
        }),
        __metadata("design:paramtypes", [searchDataservice_1.DataService])
    ], searchCookComponent);
    return searchCookComponent;
}());
exports.searchCookComponent = searchCookComponent;
//# sourceMappingURL=searchCook.component.js.map