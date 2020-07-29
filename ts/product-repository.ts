import { Product } from './product';

export class ProductRepository{
    private products: Product[] = [];

    constructor(){
        this.addItem(new Product(100, "bulbasaur","bulbasaur.png","Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore blanditiis neque nisi earum voluptates repudiandae",20));
        this.addItem(new Product(101, "ivysaur","ivysaur.png","Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore blanditiis neque nisi earum voluptates repudiandae",30));
        this.addItem(new Product(102, "venusaur","venusaur.png","Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore blanditiis neque nisi earum voluptates repudiandae",10,false));
        this.addItem(new Product(103, "squirtle","squirtle.png","Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore blanditiis neque nisi earum voluptates repudiandae",25));
        this.addItem(new Product(104, "charmander","charmander.png","Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore blanditiis neque nisi earum voluptates repudiandae",10));
    }

    public addItem(product: Product){
        this.products.push(product)
    }

    public getItems() : Product[]{
        return this.products;
    }

    public getItemByID(id:number) : Product{
        let filterItem: Product[] = this.products.filter(product => product.id === id);
        if(filterItem.length > 0) return filterItem[0];
        return null;
    }

    public showItemInHTML(): string{
        let total:number = this.products.length;
        let resultHTML: string ="";

        if(total > 0){
            for(let i:number = 0; i < total; i++){
                let currentItem:Product = this.products[i];

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
        }else{
            resultHTML = "Chưa có sản phẩm nào trong giỏ hàng"
        }

        return resultHTML;
    }
}