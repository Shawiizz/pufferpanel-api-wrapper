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
exports.PufferClient = void 0;
var PufferServer_1 = require("./PufferServer");
var PufferNode_1 = require("./PufferNode");
var PufferUser_1 = require("./PufferUser");
var axios_1 = require("axios");
var Query_1 = require("../util/Query");
var PufferClient = /** @class */ (function () {
    function PufferClient(authenticator) {
        this.authenticator = authenticator;
    }
    PufferClient.prototype.getNodes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.sendRequest('GET', "/api/nodes")];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data.map(function (node) {
                                return new PufferNode_1.PufferNode()
                                    .setClient(_this)
                                    .setId(node.id)
                                    .setName(node.name)
                                    .setPrivateHost(node.privateHost)
                                    .setPrivatePort(node.privatePort)
                                    .setPublicHost(node.publicHost)
                                    .setPublicPort(node.publicPort)
                                    .setSftpPort(node.sftpPort);
                            })];
                }
            });
        });
    };
    PufferClient.prototype.getServers = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.sendRequest('GET', "/api/servers".concat((0, Query_1.objectToQueryString)(query)))];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data.servers.map(function (server) {
                                return new PufferServer_1.PufferServer()
                                    .setClient(_this)
                                    .setId(server.id)
                                    .setIp(server.ip)
                                    .setName(server.name)
                                    .setNode(new PufferNode_1.PufferNode()
                                    .setClient(_this)
                                    .setId(server.node.id)
                                    .setName(server.node.name)
                                    .setPrivateHost(server.node.privateHost)
                                    .setPrivatePort(server.node.privatePort)
                                    .setPublicHost(server.node.publicHost)
                                    .setPublicPort(server.node.publicPort)
                                    .setSftpPort(server.node.sftpPort))
                                    .setNodeId(server.node.id)
                                    .setPort(server.port)
                                    .setType(server.type)
                                    .setUsers(server.users);
                            })];
                }
            });
        });
    };
    PufferClient.prototype.getServer = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var response, server;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.sendRequest('GET', "/api/servers/".concat(id))];
                    case 1:
                        response = _a.sent();
                        server = response.data.server;
                        return [2 /*return*/, new PufferServer_1.PufferServer()
                                .setClient(this)
                                .setPermissions(response.data.permissions)
                                .setId(server.id)
                                .setIp(server.ip)
                                .setName(server.name)
                                .setNode(new PufferNode_1.PufferNode()
                                .setClient(this)
                                .setId(server.node.id)
                                .setName(server.node.name)
                                .setPrivateHost(server.node.privateHost)
                                .setPrivatePort(server.node.privatePort)
                                .setPublicHost(server.node.publicHost)
                                .setPublicPort(server.node.publicPort)
                                .setSftpPort(server.node.sftpPort))
                                .setNodeId(server.node.id)
                                .setPort(server.port)
                                .setType(server.type)
                                .setUsers(server.users)];
                }
            });
        });
    };
    PufferClient.prototype.getNode = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.sendRequest('GET', "/api/nodes/".concat(id))];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new PufferNode_1.PufferNode()
                                .setClient(this)
                                .setId(response.data.id)
                                .setName(response.data.name)
                                .setPrivateHost(response.data.privateHost)
                                .setPrivatePort(response.data.privatePort)
                                .setPublicHost(response.data.publicHost)
                                .setPublicPort(response.data.publicPort)
                                .setSftpPort(response.data.sftpPort)];
                }
            });
        });
    };
    PufferClient.prototype.getSelf = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.sendRequest('GET', "/api/self")];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new PufferUser_1.PufferUser(response.data.id)
                                .setClient(this)
                                .setEmail(response.data.email)
                                .setUsername(response.data.username)
                                .setPassword(response.data.password)
                                .setNewPassword(response.data.newPassword)];
                }
            });
        });
    };
    PufferClient.prototype.sendRequest = function (method, path, data) {
        return __awaiter(this, void 0, void 0, function () {
            var error_1, errorCode, errorMessage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.request({
                                method: method,
                                url: "".concat(this.authenticator.endpoint).concat(path),
                                data: data,
                                headers: {
                                    Authorization: "Bearer ".concat(this.authenticator.getAccessToken())
                                }
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_1 = _a.sent();
                        if (axios_1.default.isAxiosError(error_1) && error_1.response) {
                            errorCode = error_1.response.status;
                            errorMessage = "Invalid response.\nStatus Code: ".concat(errorCode, "\nResponse Data: ").concat(JSON.stringify(error_1.response.data, null, 2));
                            throw new Error(errorMessage);
                        }
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return PufferClient;
}());
exports.PufferClient = PufferClient;
