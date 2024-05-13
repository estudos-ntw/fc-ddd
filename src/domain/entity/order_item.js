"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OrderItem = /** @class */ (function () {
    function OrderItem(id, name, price, productId, quantity) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._productId = productId;
        this._quantity = quantity;
        this._total = this.total();
    }
    Object.defineProperty(OrderItem.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrderItem.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrderItem.prototype, "productId", {
        get: function () {
            return this._productId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrderItem.prototype, "quantity", {
        get: function () {
            return this._quantity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrderItem.prototype, "price", {
        get: function () {
            return this._price;
        },
        enumerable: false,
        configurable: true
    });
    OrderItem.prototype.total = function () {
        return this._price * this._quantity;
    };
    return OrderItem;
}());
exports.default = OrderItem;
