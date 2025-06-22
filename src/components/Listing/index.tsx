import type { ProductDTO } from '../../models/product';
import './style.css'

type Props = {
    product : ProductDTO;
}


export default function Listing({product} : Props){

    return(
        <>
        <div className='cards-container container'>
            <div className='product-card'>
                <h3>{product.name}</h3>
                <h4>R$ {product.price.toFixed(2)}</h4>
            </div>
        </div>
        
        </>


    );

    
}