import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
    selector: 'pm-products',
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})

export class ProductListComponent implements OnInit {

    pageTitle: string = 'Product List'
    imageWidth: number = 50;
    imageMargin: number =  2;
    showImage: boolean = false;
    _listFilter: string;
    get listFilter():string
    {
        return this._listFilter;
    }
    set listFilter(value:string)
    {
        this._listFilter = value;
        this.filteredProducts=this.listFilter?this.performFilter(this.listFilter):this.products;
    }
    filteredProducts: IProduct[];
    products: IProduct[] = [
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2019",
            "description": "fancy description heare",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "https://cdn11.bigcommerce.com/s-9p889rxpkb/product_images/uploaded_images/vc-launch-hp-banner.jpg"
        },
        {
            "productId": 3,
            "productName": "Hammer",
            "productCode": "TBX-0023",
            "releaseDate": "March 22, 2019",
            "description": "fancy description heare",
            "price": 8.99,
            "starRating": 4.6,
            "imageUrl": "https://cdn11.bigcommerce.com/s-9p889rxpkb/product_images/uploaded_images/vc-launch-hp-banner.jpg"
        }
    ];

    constructor() {
        this.filteredProducts = this.products;
        this.listFilter = 'cart';
    }

    ngOnInit() {
        console.log('In OnInit!');
    }

    toggleImage(): void
    {
        this.showImage = !this.showImage;
    }

    performFilter(filterBy: string): IProduct[]
    {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product:IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
}