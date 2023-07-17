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
exports.PufferAuthenticatorBuilder = void 0;
var axios_1 = require("axios");
var PufferAuthenticatorBuilder = /** @class */ (function () {
    function PufferAuthenticatorBuilder() {
        this.port = 8080;
        this.ssl = true;
        this.accessToken = null;
    }
    Object.defineProperty(PufferAuthenticatorBuilder.prototype, "endpoint", {
        get: function () {
            if (this.ip && this.domain)
                throw new Error('You can\'t use both ip and domain');
            if (this.ip)
                return "".concat(this.ssl ? 'https' : 'http', "://").concat(this.ip, ":").concat(this.port);
            return "".concat(this.ssl ? 'https' : 'http', "://").concat(this.domain);
        },
        enumerable: false,
        configurable: true
    });
    PufferAuthenticatorBuilder.prototype.withClientId = function (clientId) {
        this.clientId = clientId;
        return this;
    };
    PufferAuthenticatorBuilder.prototype.withClientSecret = function (clientSecret) {
        this.clientSecret = clientSecret;
        return this;
    };
    PufferAuthenticatorBuilder.prototype.withDomain = function (domain) {
        this.domain = domain;
        return this;
    };
    PufferAuthenticatorBuilder.prototype.withIp = function (ip) {
        this.ip = ip;
        return this;
    };
    PufferAuthenticatorBuilder.prototype.withPort = function (port) {
        this.port = port;
        return this;
    };
    PufferAuthenticatorBuilder.prototype.withSsl = function (ssl) {
        this.ssl = ssl;
        return this;
    };
    PufferAuthenticatorBuilder.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    PufferAuthenticatorBuilder.prototype.getToken = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var response, error_1;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.endpoint, "/oauth2/token"), {
                                grant_type: 'client_credentials',
                                client_id: this.clientId,
                                client_secret: this.clientSecret
                            }, {
                                headers: {
                                    'Content-Type': 'application/x-www-form-urlencoded',
                                }
                            })];
                    case 1:
                        response = _b.sent();
                        console.log(response.data);
                        if ((_a = response.data) === null || _a === void 0 ? void 0 : _a.expires_in) {
                            setTimeout(function () {
                                console.log('Token has expired, fetching new one');
                                _this.accessToken = null;
                                _this.getToken();
                            }, response.data.expires_in * 1000);
                        }
                        this.accessToken = response.data.access_token;
                        if (!this.accessToken)
                            console.error('Failed to authenticate, check your credentials');
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _b.sent();
                        console.log('Error :', error_1);
                        throw new Error('Failed to authenticate, check your credentials');
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PufferAuthenticatorBuilder.prototype.build = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.accessToken) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getToken()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/, this];
                }
            });
        });
    };
    return PufferAuthenticatorBuilder;
}());
exports.PufferAuthenticatorBuilder = PufferAuthenticatorBuilder;
