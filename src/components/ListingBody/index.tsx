

import { useContext, useEffect, useState } from 'react';
import Filter from '../Filter';
import './styles.css';
import type { ProductDTO } from '../../models/product';
import *as productService from '../../services/product-service';
import Listing from '../Listing';
import { ContextProductCount } from '../../utils/context-product';

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

    const {contextProductCount, setContextProductCount } = useContext(ContextProductCount);

    useEffect(() => {
    const result = productService.findByPrice(queryParams.minPrice, queryParams.maxPrice);
    setProducts(result);
    console.log("Passou no 1!" + result)
    }, [queryParams]);

    useEffect(() => {
        console.log("Passou no 2 antes de atulizar!" +  contextProductCount)
    setContextProductCount(products.length);
    console.log("Passou no 2!" +  contextProductCount)
    }, [products]);

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