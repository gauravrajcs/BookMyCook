"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var City = (function () {
    function City(id, name) {
        this.id = id;
        this.name = name;
    }
    return City;
}());
exports.City = City;
var Area = (function () {
    function Area(id, cityid, name) {
        this.id = id;
        this.cityid = cityid;
        this.name = name;
    }
    return Area;
}());
exports.Area = Area;
var DataService = (function () {
    function DataService() {
    }
    DataService.prototype.getCities = function () {
        return [
            new City(1, 'Bengluru'),
            new City(2, 'Kolkata'),
            new City(3, 'Mumbai'),
            new City(4, 'New Delhi')
        ];
    };
    DataService.prototype.getAreas = function () {
        return [
            new Area(1, 1, 'BTM 1st Stage'),
            new Area(2, 1, 'BTM 2nd Stage'),
            new Area(3, 1, 'JP Nagar'),
            new Area(4, 1, 'Jayanagar'),
            new Area(5, 2, 'Salt Lake'),
            new Area(6, 2, 'Sealdah'),
            new Area(7, 2, 'Howarh'),
            new Area(8, 2, 'Weston Street'),
            new Area(9, 3, 'Malad'),
            new Area(10, 3, 'Andheri'),
            new Area(11, 3, 'Navi Mumbai'),
            new Area(12, 3, 'Churchgate'),
            new Area(13, 4, 'Laxami Nagar'),
            new Area(14, 4, 'Dwarka'),
            new Area(15, 4, 'Rohini'),
            new Area(16, 4, 'Anand Vihar'),
        ];
    };
    DataService = __decorate([
        core_1.Injectable()
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=searchDataservice.js.map