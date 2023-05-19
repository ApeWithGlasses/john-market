import { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/ApeWithGlasses/john-market/main/src/database/productsDB.json')
      .then(response => response.json())
      .then(jsonData => setData(jsonData))
      .catch(error => console.error(error));
  });

  return (
    <>
      < Header />
      <div className="products__container">
        {data.map((item, index) => (
          <div key={index} className="product__card">
            <figure className="product__img">
              <img src={item.img} />
            </figure>
            <div className="product__description">
              <h3>{item.name}</h3>
              <span>{item.price}$</span>
              <span><strong>Code:</strong>{item.code}</span>
              <span>Lote: {item.lote} | Expiration Date: {item.expirationDate}</span>
              <span>Category: {item.category}</span>
            </div>
          </div>
        ))}
      </div>
      < Footer />
    </>
  )
}

export default Products