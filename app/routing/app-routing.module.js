"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var app_component_1 = require("../appComponent/app.component");
var home_component_1 = require("../home/home.component");
var imageSlide_component_1 = require("../imageSlide/imageSlide.component");
var signupCook_component_1 = require("../signupCook/signupCook.component");
var header_component_1 = require("../header/header.component");
var footer_component_1 = require("../footer/footer.component");
var searchCook_component_1 = require("../searchCook/searchCook.component");
var login_component_1 = require("../login/login.component");
var getSearchCook_component_1 = require("../searchCook/getSearchCook.component");
var signupCustomer_component_1 = require("../signupCustomer/signupCustomer.component");
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'signupCook', component: signupCook_component_1.CookSignupComponent },
    { path: 'login', component: login_component_1.CustomerLoginComponent },
    { path: 'cooksearchdata', component: getSearchCook_component_1.GetCookSearchComponent },
    { path: 'signupCustomer', component: signupCustomer_component_1.CustomerSignupComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
exports.routingComponents = [
    app_component_1.AppComponent, home_component_1.HomeComponent, imageSlide_component_1.CSSCarouselComponent,
    signupCook_component_1.CookSignupComponent, header_component_1.HeaderComponent, footer_component_1.FooterComponent,
    searchCook_component_1.searchCookComponent, login_component_1.CustomerLoginComponent, signupCook_component_1.EqualValidator,
    getSearchCook_component_1.GetCookSearchComponent, signupCustomer_component_1.CustomerSignupComponent
];
//# sourceMappingURL=app-routing.module.js.map