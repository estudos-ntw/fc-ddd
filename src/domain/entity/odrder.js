"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Order = /** @class */ (function () {
    function Order(id, customerId, items) {
        this._id = id;
        this._customerId = customerId;
        this._items = items;
        this._total = this.total();
        this.validate();
    }
    Object.defineProperty(Order.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Order.prototype, "customerId", {
        get: function () {
            return this._customerId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Order.prototype, "items", {
        get: function () {
            return this._items;
        },
        enumerable: false,
        configurable: true
    });
    Order.prototype.validate = function () {
        if (this._id.length === 0) {
            throw new Error("Id is required");
        }
        if (this._customerId.length === 0) {
            throw new Error("CustomerId is required");
        }
        if (this._items.length === 0) {
            throw new Error("Items are required");
        }
        if (this._items.some(function (item) { return item.quantity <= 0; })) {
            throw new Error("Item qtd must be greater than 0");
        }
        return true;
    };
    Order.prototype.addItem = function (items) {
        this._items.push(items);
    };
    Order.prototype.total = function () {
        return this._items.reduce(function (acc, item) { return acc + item.total(); }, 0);
    };
    return Order;
}());
exports.default = Order;
