import './styles.css';
import Button from "../Button";
import { useState } from 'react';

type Props = {
  onSearch: Function;
}

type FormData = {
  minPrice?: number;
  maxPrice?: number;

}

export default function Filter({onSearch} : Props) {

  const[formData, setFormData] = useState<FormData>({})

  function handleInputChange(event: any){
    const value = event.target.value;
    const name = event.target.name;
    setFormData({...formData, [name]: value});

  }

  function handleSubmit(event : any){
    event.preventDefault();
    
   const minRaw = formData.minPrice;
   const maxRaw = formData.maxPrice;

   const min = minRaw === undefined || minRaw === "" ? 0 : Number(minRaw);
   const max = maxRaw === undefined || maxRaw === "" ? Number.MAX_VALUE : Number(maxRaw);

   onSearch({
    minPrice: min,
    maxPrice: max
    });

    console.log(formData)
  }


  return (
    <div className="filter-container container">
      <form onSubmit={handleSubmit} className='form-container ' > 
        <input
          name="minPrice"
          value={formData.minPrice ?? ""}
          type="text" 
          placeholder="Preço mínimo"
          onChange={handleInputChange}/>
        <input
          name="maxPrice"
          value={formData.maxPrice ?? ""}
          type="text"
          placeholder="Preço máximo"
          onChange={handleInputChange}/>
        <Button text ='Filtrar'/>
      </form>
    </div>
  );
}
