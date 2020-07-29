"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cart {
    constructor() {
        this.cartItems = [];
    }
    addProduct(product, quantity = 1) {
    }
    updateProduct(product, quantity = 1) {
    }
    removeProduct(product) {
    }
    isEmpty() {
        return true;
    }
    getTotalQuantity() {
        return 10;
    }
    getTotalPrice() {
        return 20;
    }
    showCartBodyHTML() {
        return '123';
    }
    showCartFooterHTML() {
        return 'footer';
    }
}
