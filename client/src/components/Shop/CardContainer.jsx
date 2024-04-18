import "./CardContainer.css";
import PropTypes from "prop-types";
import { useState } from "react";
import Card from "./Card";
import ProductDetails from "./ProductDetails";

function CardContainer({ data, sectionSelected }) {
  // State qui stock l'état Ouvert/Fermé du composant ProductDetails
  const [visible, setVisible] = useState(false);

  // State qui stock l'index du produit cliqué
  const [productSelected, setProductSelected] = useState();

  // Fonction qui change l'état de visible à true (Ouvre ProductDetails)
  // Qui assigne l'index du produit cliqué à ProductSelected (Pour obtenir les détails du bon produit)
  const openProduct = (indexOfProduct) => {
    setVisible(true);
    setProductSelected(indexOfProduct);
  };

  // Fonction qui change l'état de visible à false (Ferme ProductDetails)
  const closeProduct = () => {
    setVisible(!visible);
  };

  // State qui stock la taille choisit pour l'ajout au panier
  const [chooseSize, setChooseSize] = useState("Votre taille");

  return (
    <>
      <div
        className="card-container"
      >
        {/* .map() Pour générer toutes les cards d'une section */}
        {data[sectionSelected].products.map((product, index) => (
          <Card
            key={`${product.id}.${product.name}`}
            data={product}
            colorSection={data[sectionSelected].color}
            openProduct={() => openProduct(index)}
            setVisible={setVisible}
          />
        ))}
      </div>
      {/* Ouvre le composant ProductDetails lors ce que visible est true */}
      {visible && (
        <ProductDetails
          data={data[sectionSelected].products[productSelected]}
          colorSection={data[sectionSelected].color}
          visible={visible}
          closeProduct={closeProduct}
          chooseSize={chooseSize}
          setChooseSize={setChooseSize}
        />
      )}
    </>
  );
}

CardContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    products: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })).isRequired,    
    color: PropTypes.string
  })).isRequired,
  sectionSelected: PropTypes.number.isRequired,
};
export default CardContainer;
