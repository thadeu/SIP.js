"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncomingResponseMessage = void 0;
var tslib_1 = require("tslib");
var incoming_message_1 = require("./incoming-message");
/**
 * Incoming SIP response message.
 */
var IncomingResponseMessage = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(IncomingResponseMessage, _super);
    function IncomingResponseMessage() {
        var _this = _super.call(this) || this;
        _this.headers = {};
        return _this;
    }
    return IncomingResponseMessage;
}(incoming_message_1.IncomingMessage));
exports.IncomingResponseMessage = IncomingResponseMessage;
