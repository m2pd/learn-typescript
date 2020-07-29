"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
const product_1 = require("./product");
class ProductRepository {
    constructor() {
        this.products = [];
        let product = new product_1.Product(100, "bulbasaur", "bulbasaur.png", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore blanditiis neque nisi earum voluptates repudiandae", 20);
        this.addItem(product);
    }
    addItem(product) {
        this.products.push(product);
        console.log(this.products);
    }
    getItems() {
        return this.products;
        console.log('hello');
    }
    getItemByID(id) {
        return new product_1.Product(100, "bulbasaur", "bulbasaur.png", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore blanditiis neque nisi earum voluptates repudiandae", 20);
    }
    showItemInHTML() {
        return "ITEM";
    }
}
exports.ProductRepository = ProductRepository;
