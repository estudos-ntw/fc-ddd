"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer = /** @class */ (function () {
    function Customer(id, name) {
        this._name = "";
        this._activate = false;
        this._rewardPoints = 0;
        this._id = id;
        this._name = name;
        this.validate();
    }
    Object.defineProperty(Customer.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "rewardPoints", {
        get: function () {
            return this._rewardPoints;
        },
        enumerable: false,
        configurable: true
    });
    Customer.prototype.isActive = function () {
        return this._activate;
    };
    Customer.prototype.validate = function () {
        if (this._name.length === 0) {
            throw new Error("Name is required");
        }
        if (this._id.length === 0) {
            throw new Error("Id is required");
        }
    };
    Customer.prototype.changeName = function (name) {
        this._name = name;
        this.validate();
    };
    Object.defineProperty(Customer.prototype, "Address", {
        get: function () {
            return this._address;
        },
        set: function (address) {
            this._address = address;
        },
        enumerable: false,
        configurable: true
    });
    Customer.prototype.changeAddress = function (address) {
        this._address = address;
    };
    Customer.prototype.activate = function () {
        if (this._address === undefined) {
            throw new Error("Address is mandatory to activate a customer");
        }
        this._activate = true;
    };
    Customer.prototype.deactivate = function () {
        this._activate = false;
    };
    Customer.prototype.addRewardPoints = function (points) {
        this._rewardPoints += points;
    };
    return Customer;
}());
exports.default = Customer;
