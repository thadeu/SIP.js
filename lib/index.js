"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Core = exports.version = exports.name = exports.Web = exports.Utils = exports.UA = exports.makeUserAgentCoreConfigurationFromUA = exports.Transactions = exports.Subscription = exports.Session = exports.InviteServerContext = exports.InviteClientContext = exports.ServerContext = exports.RegisterContext = exports.ReferServerContext = exports.ReferClientContext = exports.PublishContext = exports.Parser = exports.Exceptions = exports.UAStatus = exports.TypeStrings = exports.SessionStatus = exports.DialogStatus = exports.C = exports.ClientContext = exports.URI = exports.Transport = exports.Timers = exports.OutgoingRequest = exports.NameAddrHeader = exports.LoggerFactory = exports.IncomingResponse = exports.IncomingRequest = exports.Grammar = exports.DigestAuthentication = void 0;
var tslib_1 = require("tslib");
var core_1 = require("./core");
Object.defineProperty(exports, "DigestAuthentication", { enumerable: true, get: function () { return core_1.DigestAuthentication; } });
Object.defineProperty(exports, "Grammar", { enumerable: true, get: function () { return core_1.Grammar; } });
Object.defineProperty(exports, "IncomingRequest", { enumerable: true, get: function () { return core_1.IncomingRequestMessage; } });
Object.defineProperty(exports, "IncomingResponse", { enumerable: true, get: function () { return core_1.IncomingResponseMessage; } });
Object.defineProperty(exports, "LoggerFactory", { enumerable: true, get: function () { return core_1.LoggerFactory; } });
Object.defineProperty(exports, "NameAddrHeader", { enumerable: true, get: function () { return core_1.NameAddrHeader; } });
Object.defineProperty(exports, "OutgoingRequest", { enumerable: true, get: function () { return core_1.OutgoingRequestMessage; } });
Object.defineProperty(exports, "Timers", { enumerable: true, get: function () { return core_1.Timers; } });
Object.defineProperty(exports, "Transport", { enumerable: true, get: function () { return core_1.Transport; } });
Object.defineProperty(exports, "URI", { enumerable: true, get: function () { return core_1.URI; } });
var ClientContext_1 = require("./ClientContext");
Object.defineProperty(exports, "ClientContext", { enumerable: true, get: function () { return ClientContext_1.ClientContext; } });
var Constants_1 = require("./Constants");
Object.defineProperty(exports, "C", { enumerable: true, get: function () { return Constants_1.C; } });
var Enums_1 = require("./Enums");
Object.defineProperty(exports, "DialogStatus", { enumerable: true, get: function () { return Enums_1.DialogStatus; } });
Object.defineProperty(exports, "SessionStatus", { enumerable: true, get: function () { return Enums_1.SessionStatus; } });
Object.defineProperty(exports, "TypeStrings", { enumerable: true, get: function () { return Enums_1.TypeStrings; } });
Object.defineProperty(exports, "UAStatus", { enumerable: true, get: function () { return Enums_1.UAStatus; } });
var Exceptions_1 = require("./Exceptions");
Object.defineProperty(exports, "Exceptions", { enumerable: true, get: function () { return Exceptions_1.Exceptions; } });
var Parser_1 = require("./Parser");
Object.defineProperty(exports, "Parser", { enumerable: true, get: function () { return Parser_1.Parser; } });
var PublishContext_1 = require("./PublishContext");
Object.defineProperty(exports, "PublishContext", { enumerable: true, get: function () { return PublishContext_1.PublishContext; } });
var ReferContext_1 = require("./ReferContext");
Object.defineProperty(exports, "ReferClientContext", { enumerable: true, get: function () { return ReferContext_1.ReferClientContext; } });
Object.defineProperty(exports, "ReferServerContext", { enumerable: true, get: function () { return ReferContext_1.ReferServerContext; } });
var RegisterContext_1 = require("./RegisterContext");
Object.defineProperty(exports, "RegisterContext", { enumerable: true, get: function () { return RegisterContext_1.RegisterContext; } });
var ServerContext_1 = require("./ServerContext");
Object.defineProperty(exports, "ServerContext", { enumerable: true, get: function () { return ServerContext_1.ServerContext; } });
var Session_1 = require("./Session");
Object.defineProperty(exports, "InviteClientContext", { enumerable: true, get: function () { return Session_1.InviteClientContext; } });
Object.defineProperty(exports, "InviteServerContext", { enumerable: true, get: function () { return Session_1.InviteServerContext; } });
Object.defineProperty(exports, "Session", { enumerable: true, get: function () { return Session_1.Session; } });
var Subscription_1 = require("./Subscription");
Object.defineProperty(exports, "Subscription", { enumerable: true, get: function () { return Subscription_1.Subscription; } });
var transactions_1 = require("./core/transactions");
var Transactions = {
    InviteClientTransaction: transactions_1.InviteClientTransaction,
    InviteServerTransaction: transactions_1.InviteServerTransaction,
    NonInviteClientTransaction: transactions_1.NonInviteClientTransaction,
    NonInviteServerTransaction: transactions_1.NonInviteServerTransaction
};
exports.Transactions = Transactions;
var UA_1 = require("./UA");
Object.defineProperty(exports, "makeUserAgentCoreConfigurationFromUA", { enumerable: true, get: function () { return UA_1.makeUserAgentCoreConfigurationFromUA; } });
Object.defineProperty(exports, "UA", { enumerable: true, get: function () { return UA_1.UA; } });
var Utils_1 = require("./Utils");
Object.defineProperty(exports, "Utils", { enumerable: true, get: function () { return Utils_1.Utils; } });
var Web = (0, tslib_1.__importStar)(require("./Web/index"));
exports.Web = Web;
// tslint:disable-next-line:no-var-requires
var pkg = require("../package.json");
var name = pkg.title;
exports.name = name;
var version = pkg.version;
exports.version = version;
var Core = (0, tslib_1.__importStar)(require("./core/index"));
exports.Core = Core;