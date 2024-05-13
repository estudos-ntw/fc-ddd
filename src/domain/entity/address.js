"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Address = /** @class */ (function () {
    function Address(street, number, city, zipcode) {
        this._street = "";
        this._number = 0;
        this._city = "";
        this._zipcode = "";
        this._street = street;
        this._number = number;
        this._city = city;
        this._zipcode = zipcode;
        this.validate();
    }
    Object.defineProperty(Address.prototype, "street", {
        get: function () {
            return this._street;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "number", {
        get: function () {
            return this._number;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "city", {
        get: function () {
            return this._city;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "zipcode", {
        get: function () {
            return this._zipcode;
        },
        enumerable: false,
        configurable: true
    });
    Address.prototype.validate = function () {
        if (this._street.length === 0) {
            throw new Error("Street is required");
        }
        if (this._number === 0) {
            throw new Error("Number is required");
        }
        if (this._city.length === 0) {
            throw new Error("City is required");
        }
        if (this._zipcode.length === 0) {
            throw new Error("Zip is required");
        }
    };
    Address.prototype.toString = function () {
        return "".concat(this._street, " ").concat(this._number, ",  ").concat(this._city, " ").concat(this._zipcode);
    };
    return Address;
}());
exports.default = Address;
