import React, {useState} from 'react'
import {  Wallet } from "@mercadopago/sdk-react";
import {  handleBuy } from '../../helpers/fetchMp';
import "../../stylesheets/product.css"

const Product = ({ productName, imgLink}) => {

  // 5031 7557 3453 0604
  // 123
  // 11/25

  // falta optimizar y mejorar rendimiento, pero funcionalidad principal andando

  const [preferenceId, setPreferenceId] = useState(null);

  preferenceId && console.log("HAY IDDDD")

  return (
    <div className='product_container'>
      <h2>{productName}</h2>
      <img src={imgLink} alt="product_img" />
      <button onClick={()=> handleBuy(productName, setPreferenceId)}>Buy</button>
      {preferenceId && <Wallet initialization={{ preferenceId }} />}
    </div>
  )
}

export default Product
