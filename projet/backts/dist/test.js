"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Entity = /** @class */ (function () {
    function Entity(id, toKill) {
        this.id = id;
        this.toKill = toKill;
    }
    return Entity;
}());
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person(id, firstname, lastname) {
        var _this = _super.call(this, id, false) || this;
        _this.id = id;
        _this.firstname = firstname;
        _this.lastname = lastname;
        return _this;
    }
    return Person;
}(Entity));
var Company = /** @class */ (function (_super) {
    __extends(Company, _super);
    function Company(id, name) {
        var _this = _super.call(this, id, false) || this;
        _this.id = id;
        _this.name = name;
        return _this;
    }
    return Company;
}(Entity));
var Killer = /** @class */ (function () {
    function Killer() {
    }
    Killer.prototype.kill = function (target) {
        target.toKill = true;
    };
    return Killer;
}());
var PersonKiller = /** @class */ (function () {
    function PersonKiller() {
    }
    PersonKiller.prototype.kill = function (target) {
        target.toKill = true;
    };
    return PersonKiller;
}());
var CompanyKiller = /** @class */ (function () {
    function CompanyKiller() {
    }
    CompanyKiller.prototype.kill = function (target) {
        target.toKill = true;
    };
    return CompanyKiller;
}());
var jose = new Person(1, 'Jose', 'Fine');
var polluteur = new Company(1, 'Polluter');
var robot = new CompanyKiller();
robot.kill(polluteur);
console.log(polluteur);
