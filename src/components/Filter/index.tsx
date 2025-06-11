import './styles.css';
import Button from "../Button";

export default function Filter() {
  return (
    <div className="filter-container container">
      <form className='form-container ' > 
        <input  type="text" placeholder="Preço mínimo"/>
        <input  type="text" placeholder="Preço máximo"/>
        <Button text ='Filtrar'/>
      </form>
    </div>
  );
}
