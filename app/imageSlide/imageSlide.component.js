"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CSSCarouselComponent = (function () {
    function CSSCarouselComponent() {
        this.images = IMAGES;
    }
    CSSCarouselComponent = __decorate([
        core_1.Component({
            selector: 'my-slide',
            template: "\n <div class=\"carousel\">\n <ul class=\"slides\">\n <li *ngFor=\"let image of images\">\n      <h2>{{image.title}}</h2>\n      <img src=\"{{image.url}}\" alt=\"\">\n</li>\n</ul>\n</div>\n  ",
            styleUrls: ['app/home/home.component.css'],
        })
    ], CSSCarouselComponent);
    return CSSCarouselComponent;
}());
exports.CSSCarouselComponent = CSSCarouselComponent;
var IMAGES = [
    { "title": "Good Food", "url": "/images/cook1.jpg" },
    { "title": "Love Cooking", "url": "/images/cook2.jpg" },
    { "title": "Great Cooking", "url": "/images/cook3.jpg" },
    { "title": "Great Cooks", "url": "/images/cook4.jpg" },
    { "title": "Great Cook !! Great Food", "url": "/images/cook1.jpg" }
];
//# sourceMappingURL=imageSlide.component.js.map