import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'pm-products',
    templateUrl: 'product-list.component.html'
})

export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List'
    products: any[] = [
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2019",
            "description": "fancy description heare",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": ""
        },
        {
            "productId": 3,
            "productName": "Hammer",
            "productCode": "TBX-0023",
            "releaseDate": "March 22, 2019",
            "description": "fancy description heare",
            "price": 8.99,
            "starRating": 4.6,
            "imageUrl": ""
        }
    ];

    constructor() { }

    ngOnInit() { }
}