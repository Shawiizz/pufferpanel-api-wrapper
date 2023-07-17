"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PufferUser = void 0;
var OAuth2Client_1 = require("./OAuth2Client");
var PufferUser = /** @class */ (function () {
    function PufferUser(id) {
        this.id = id;
    }
    PufferUser.prototype.setClient = function (client) {
        this.client = client;
        return this;
    };
    PufferUser.prototype.getClient = function () {
        return this.client;
    };
    PufferUser.prototype.getId = function () {
        return this.id;
    };
    PufferUser.prototype.getEmail = function () {
        return this.email;
    };
    PufferUser.prototype.setEmail = function (email) {
        this.email = email;
        return this;
    };
    PufferUser.prototype.getUsername = function () {
        return this.username;
    };
    PufferUser.prototype.setUsername = function (username) {
        this.username = username;
        return this;
    };
    PufferUser.prototype.getPassword = function () {
        return this.password;
    };
    PufferUser.prototype.setPassword = function (password) {
        this.password = password;
        return this;
    };
    PufferUser.prototype.getNewPassword = function () {
        return this.newPassword;
    };
    PufferUser.prototype.setNewPassword = function (newPassword) {
        this.newPassword = newPassword;
        return this;
    };
    PufferUser.prototype.getOtpActive = function () {
        return this.otpActive;
    };
    PufferUser.prototype.setOtpActive = function (otpActive) {
        this.otpActive = otpActive;
        return this;
    };
    PufferUser.prototype.update = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.client.sendRequest('PUT', "/api/users/".concat(this.getId()), {
                        otpActive: this.getOtpActive() // TODO: test
                    })];
            });
        });
    };
    PufferUser.prototype.getOAuth2Clients = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.sendRequest('GET', "/api/self/oauth2")];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data.map(function (client) { return new OAuth2Client_1.OAuth2Client()
                                .setClient(_this.getClient())
                                .setId(client.client_id)
                                .setName(client.name)
                                .setDescription(client.description); })];
                }
            });
        });
    };
    PufferUser.prototype.createOAuth2Client = function (name, description) {
        if (description === void 0) { description = ''; }
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.sendRequest('POST', "/api/self/oauth2", {
                            name: name,
                            description: description,
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new OAuth2Client_1.OAuth2Client()
                                .setClient(this.getClient())
                                .setId(response.data.id)
                                .setName(name)
                                .setDescription(description)
                                .setSecret(response.data.secret)];
                }
            });
        });
    };
    PufferUser.prototype.deleteOAuth2Client = function (client) {
        return this.client.sendRequest('DELETE', "/api/self/oauth2/".concat(client.getId()));
    };
    return PufferUser;
}());
exports.PufferUser = PufferUser;
