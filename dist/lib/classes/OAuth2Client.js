"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAuth2Client = void 0;
var OAuth2Client = /** @class */ (function () {
    function OAuth2Client() {
    }
    OAuth2Client.prototype.setClient = function (client) {
        this.client = client;
        return this;
    };
    OAuth2Client.prototype.getClient = function () {
        return this.client;
    };
    OAuth2Client.prototype.setId = function (id) {
        this.id = id;
        return this;
    };
    OAuth2Client.prototype.getId = function () {
        return this.id;
    };
    OAuth2Client.prototype.getName = function () {
        return this.name;
    };
    OAuth2Client.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    OAuth2Client.prototype.getDescription = function () {
        return this.description;
    };
    OAuth2Client.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    OAuth2Client.prototype.getSecret = function () {
        return this.secret;
    };
    OAuth2Client.prototype.setSecret = function (secret) {
        this.secret = secret;
        return this;
    };
    return OAuth2Client;
}());
exports.OAuth2Client = OAuth2Client;
