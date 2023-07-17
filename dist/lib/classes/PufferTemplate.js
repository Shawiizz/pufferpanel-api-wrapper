"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PufferTemplate = void 0;
var PufferTemplate = /** @class */ (function () {
    function PufferTemplate() {
    }
    PufferTemplate.prototype.setClient = function (client) {
        this.client = client;
        return this;
    };
    PufferTemplate.prototype.getClient = function () {
        return this.client;
    };
    PufferTemplate.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    PufferTemplate.prototype.getType = function () {
        return this.type;
    };
    PufferTemplate.prototype.setDisplay = function (display) {
        this.display = display;
        return this;
    };
    PufferTemplate.prototype.getDisplay = function () {
        return this.display;
    };
    PufferTemplate.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    PufferTemplate.prototype.getName = function () {
        return this.name;
    };
    PufferTemplate.prototype.setRun = function (run) {
        this.run = run;
        return this;
    };
    PufferTemplate.prototype.getRun = function () {
        return this.run;
    };
    PufferTemplate.prototype.setRequirements = function (requirements) {
        this.requirements = requirements;
        return this;
    };
    PufferTemplate.prototype.getRequirements = function () {
        return this.requirements;
    };
    return PufferTemplate;
}());
exports.PufferTemplate = PufferTemplate;
