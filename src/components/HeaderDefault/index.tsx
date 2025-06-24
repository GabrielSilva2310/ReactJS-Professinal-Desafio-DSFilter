import { useContext } from "react";
import "./styles.css";
import { ContextProductCount } from "../../utils/context-product";

export default function HeaderDefault() {

    const { contextProductCount } = useContext(ContextProductCount);



  return (
    <header className="nav-container">
      <nav className="nav-main container">
        <h1>DSFilter</h1>
        <h2>{contextProductCount} produto(s)</h2>
      </nav>
    </header>
  );
}
