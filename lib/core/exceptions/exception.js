"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exception = void 0;
var tslib_1 = require("tslib");
/**
 * An Exception is considered a condition that a reasonable application may wish to catch.
 * An Error indicates serious problems that a reasonable application should not try to catch.
 * @public
 */
var Exception = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(Exception, _super);
    function Exception(message) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, message) || this;
        Object.setPrototypeOf(_this, _newTarget.prototype); // restore prototype chain
        return _this;
    }
    return Exception;
}(Error));
exports.Exception = Exception;