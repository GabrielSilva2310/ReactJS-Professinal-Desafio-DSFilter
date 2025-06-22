

import { useEffect, useState } from 'react';
import Filter from '../Filter';
import './styles.css';
import type { ProductDTO } from '../../models/product';
import *as productService from '../../services/product-service';
import Listing from '../Listing';

type QueryParams = {
    minPrice : number;
    maxPrice : number;
}

export default function ListingBody(){

    const[products, setProducts] = useState<ProductDTO[]>([]);

    const[queryParams, setQueryParams] = useState<QueryParams>({
        minPrice : 0,
        maxPrice : Number.MAX_VALUE
    });

    useEffect(()=>{
         console.log(queryParams)
        setProducts(productService.findByPrice(queryParams.minPrice, queryParams.maxPrice));
        console.log("Passou NO USE EFFECT" )
        console.log(queryParams)
    }, [queryParams]);

    function handleSearch(search : QueryParams){
        setQueryParams({... queryParams, minPrice: search.minPrice, maxPrice : search.maxPrice})

    }

    return(
        <main>
            <Filter onSearch={handleSearch}/>
            {
                products.map(product => <Listing key={product.id} product={product}/>)

            }
        </main>

    );


}