"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PufferServer = void 0;
var OAuth2Client_1 = require("./OAuth2Client");
var PufferServer = /** @class */ (function () {
    function PufferServer() {
    }
    PufferServer.prototype.setClient = function (client) {
        this.client = client;
        return this;
    };
    PufferServer.prototype.getClient = function () {
        return this.client;
    };
    PufferServer.prototype.setId = function (id) {
        this.id = id;
        return this;
    };
    PufferServer.prototype.getId = function () {
        return this.id;
    };
    PufferServer.prototype.getData = function () {
        return this.data;
    };
    PufferServer.prototype.setData = function (data) {
        this.data = data;
        return this;
    };
    PufferServer.prototype.getIp = function () {
        return this.ip;
    };
    PufferServer.prototype.setIp = function (ip) {
        this.ip = ip;
        return this;
    };
    PufferServer.prototype.getName = function () {
        return this.name;
    };
    PufferServer.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    PufferServer.prototype.getNode = function () {
        return this.node;
    };
    PufferServer.prototype.setNode = function (node) {
        this.node = node;
        return this;
    };
    PufferServer.prototype.getNodeId = function () {
        return this.nodeId;
    };
    PufferServer.prototype.setNodeId = function (nodeId) {
        this.nodeId = nodeId;
        return this;
    };
    PufferServer.prototype.getPort = function () {
        return this.port;
    };
    PufferServer.prototype.setPort = function (port) {
        this.port = port;
        return this;
    };
    PufferServer.prototype.getType = function () {
        return this.type;
    };
    PufferServer.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    PufferServer.prototype.getUsers = function () {
        return this.users;
    };
    PufferServer.prototype.setUsers = function (users) {
        this.users = users;
        return this;
    };
    PufferServer.prototype.getPermissions = function () {
        return this.permissions;
    };
    PufferServer.prototype.setPermissions = function (permissions) {
        this.permissions = permissions;
        return this;
    };
    PufferServer.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.sendRequest('POST', "/daemon/server/".concat(this.getId(), "/start"))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PufferServer.prototype.stop = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.sendRequest('POST', "/daemon/server/".concat(this.getId(), "/stop"))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PufferServer.prototype.reload = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.sendRequest('POST', "/daemon/server/".concat(this.getId(), "/reload"))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PufferServer.prototype.install = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.sendRequest('POST', "/daemon/server/".concat(this.getId(), "/install"))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PufferServer.prototype.kill = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.sendRequest('POST', "/daemon/server/".concat(this.getId(), "/kill"))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PufferServer.prototype.getStats = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.sendRequest('GET', "/daemon/server/".concat(this.getId(), "/stats"))];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    PufferServer.prototype.getStatus = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.sendRequest('GET', "/daemon/server/".concat(this.getId(), "/status"))];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    PufferServer.prototype.delete = function () {
        return this.client.sendRequest('DELETE', "/api/servers/".concat(this.getId()));
    };
    PufferServer.prototype.rename = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.sendRequest('PUT', "/api/servers/".concat(this.getId(), "/name/").concat(name))];
                    case 1:
                        _a.sent();
                        this.name = name;
                        return [2 /*return*/];
                }
            });
        });
    };
    PufferServer.prototype.getOAuth2Clients = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.sendRequest('GET', "/api/servers/".concat(this.getId(), "/oauth2"))];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data.map(function (client) {
                                return new OAuth2Client_1.OAuth2Client()
                                    .setClient(_this.getClient())
                                    .setId(client.client_id)
                                    .setName(client.name)
                                    .setDescription(client.description);
                            })];
                }
            });
        });
    };
    PufferServer.prototype.createOAuth2Client = function (name, description) {
        if (description === void 0) { description = ''; }
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.sendRequest('POST', "/api/servers/".concat(this.getId(), "/oauth2"), {
                            name: name,
                            description: description
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
    PufferServer.prototype.deleteOAuth2Client = function (client) {
        return this.client.sendRequest('DELETE', "/api/servers/".concat(this.getId(), "/oauth2/").concat(client.getId()));
    };
    PufferServer.prototype.getUsersWithPermissions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.sendRequest('GET', "/api/servers/".concat(this.getId(), "/user"))];
                    case 1:
                        request = _a.sent();
                        return [2 /*return*/, request.data.map(function (user) {
                                var username = user.username, email = user.email, serverIdentifier = user.serverIdentifier, permissions = __rest(user, ["username", "email", "serverIdentifier"]);
                                return {
                                    username: username,
                                    email: email,
                                    serverIdentifier: serverIdentifier,
                                    permissions: permissions,
                                };
                            })];
                }
            });
        });
    };
    PufferServer.prototype.setUserPermissions = function (email, permissions) {
        return __awaiter(this, void 0, void 0, function () {
            var usersWithPerms, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getUsersWithPermissions()];
                    case 1:
                        usersWithPerms = _a.sent();
                        user = usersWithPerms.find(function (user) { return user.email === email; });
                        if (!user)
                            throw new Error('User not found, cannot set permissions.');
                        return [2 /*return*/, this.client.sendRequest('PUT', "/api/servers/".concat(this.getId(), "/user/").concat(email), __assign(__assign({}, user.permissions), permissions))];
                }
            });
        });
    };
    PufferServer.prototype.deleteUser = function (email) {
        return this.client.sendRequest('DELETE', "/api/servers/".concat(this.getId(), "/user/").concat(email));
    };
    return PufferServer;
}());
exports.PufferServer = PufferServer;
