import React, { useState } from "react";
import styles from "./ProductsModal.module.css";

const ProductsModal = ({ products, onDelete, onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2 className={styles.title}>Produtos Cadastrados</h2>
        {products.length > 0 ? (
          <ul className={styles.productsList}>
            {products.map((product) => (
              <li key={product.id} className={styles.productItem}>
                <span>{product.name}</span>
                <button
                  onClick={() => onDelete(product.id)}
                  className={styles.deleteButton}
                >
                  Excluir
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.noProducts}>Nenhum produto cadastrado.</p>
        )}
      </div>
    </div>
  );
};

const ProductsPage = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Produto 1" },
    { id: 2, name: "Produto 2" },
    { id: 3, name: "Produto 3" },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Bem-vindo à Página de Produtos</h1>
      <button className={styles.openModalButton} onClick={toggleModal}>
        Ver Produtos
      </button>
      {isModalOpen && (
        <ProductsModal
          products={products}
          onDelete={handleDelete}
          onClose={toggleModal}
        />
      )}
    </div>
  );
};

export default ProductsPage;
