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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var core_2 = require("@angular/core");
var forms_1 = require("@angular/forms");
var CustomerSignupComponent = (function () {
    function CustomerSignupComponent(http, _router) {
        this.http = http;
        this.data = {
            "name": "GAURAV",
            "email": "gaurav@gmail.com",
            "mobile": "9190987654",
            "address": "BTM",
            "level": "",
            "salary": "",
            "password": "123",
            "confirmPassword": "123"
        };
        this.router = _router;
    }
    // name: string = "axs";
    CustomerSignupComponent.prototype.onSubmit = function () {
        console.log(this.data);
        this.http.post('https://us-central1-bookmycook-d8e9b.cloudfunctions.net/signup', JSON.stringify(this.data))
            .subscribe();
        alert("Signed Successfully!! Go to Login Page");
        this.router.navigateByUrl('/login');
    };
    CustomerSignupComponent = __decorate([
        core_1.Component({
            templateUrl: '/app/signup/customerSignup.component.html'
        }),
        __metadata("design:paramtypes", [http_1.Http, router_1.Router])
    ], CustomerSignupComponent);
    return CustomerSignupComponent;
}());
exports.CustomerSignupComponent = CustomerSignupComponent;
var EqualValidator = (function () {
    function EqualValidator(validateEqual) {
        this.validateEqual = validateEqual;
    }
    EqualValidator_1 = EqualValidator;
    EqualValidator.prototype.validate = function (c) {
        // self value (e.g. retype password)
        var v = c.value;
        // control value (e.g. password)
        var e = c.root.get(this.validateEqual);
        // value not equal
        if (e && v !== e.value)
            return {
                validateEqual: false
            };
        return null;
    };
    EqualValidator = EqualValidator_1 = __decorate([
        core_1.Component({
            templateUrl: '/app/signup/customerSignup.component.html',
            selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
            providers: [
                { provide: forms_1.NG_VALIDATORS, useExisting: core_2.forwardRef(function () { return EqualValidator_1; }), multi: true }
            ]
        }),
        __param(0, core_2.Attribute('validateEqual')),
        __metadata("design:paramtypes", [String])
    ], EqualValidator);
    return EqualValidator;
    var EqualValidator_1;
}());
exports.EqualValidator = EqualValidator;
//# sourceMappingURL=customerSignup.component.js.map