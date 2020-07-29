"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
const product_1 = require("./product");
class ProductRepository {
    constructor() {
        this.products = [];
        this.addItem(new product_1.Product(100, "bulbasaur", "bulbasaur.png", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore blanditiis neque nisi earum voluptates repudiandae", 20));
        this.addItem(new product_1.Product(101, "ivysaur", "ivysaur.png", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore blanditiis neque nisi earum voluptates repudiandae", 30));
        this.addItem(new product_1.Product(102, "venusaur", "venusaur.png", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore blanditiis neque nisi earum voluptates repudiandae", 10, false));
        this.addItem(new product_1.Product(103, "squirtle", "squirtle.png", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore blanditiis neque nisi earum voluptates repudiandae", 25));
        this.addItem(new product_1.Product(104, "charmander", "charmander.png", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore blanditiis neque nisi earum voluptates repudiandae", 10));
    }
    addItem(product) {
        this.products.push(product);
    }
    getItems() {
        return this.products;
    }
    getItemByID(id) {
        let filterItem = this.products.filter(product => product.id === id);
        if (filterItem.length > 0)
            return filterItem[0];
        return null;
    }
    showItemInHTML() {
        let total = this.products.length;
        let resultHTML = "";
        if (total > 0) {
            for (let i = 0; i < total; i++) {
                let currentItem = this.products[i];
                resultHTML += `<div class="media product">
                                <div class="media-left">
                                    <a href="#">
                                        <img class="media-object" src="img/characters/${currentItem.image}" alt="${currentItem.name}">
                                    </a>
                                </div>
                                <div class="media-body">
                                    <h4 class="media-heading">${currentItem.name}</h4>
                                    <p>${currentItem.summary}</p>
                                </div>
                            </div>`;
            }
        }
        else {
            resultHTML = "Chưa có sản phẩm nào trong giỏ hàng";
        }
        return resultHTML;
    }
}
exports.ProductRepository = ProductRepository;
