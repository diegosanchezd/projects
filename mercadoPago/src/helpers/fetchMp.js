import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios"


  export const createPreference = async (productName) => {

    initMercadoPago("TEST-aad0fad3-4f58-4ad4-833f-d3e240d92f5f");

    try {
      const response = await axios.post("http://localhost:8080/create_preference", {
        description: productName,
        price: 20,
        quantity: 1,
      });

      const { id } = response.data;
      return id;
    } catch (error) {
      console.log(error);
    }
  };

  export const handleBuy = async (productName, setPreferenceId) => {
    const id = await createPreference(productName);
    if (id) {
      
      setPreferenceId(id);
    }
  };