import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Form from './Form';
import Table from './Table';

function App() {

  const product = {
    id: 0,
    name: "",
    brand: ""
  }

  const [registerBtn, setRegisterBtn] = useState(true);
  const [products, setProducts] = useState([]);
  const [productObject, setProductObject] = useState(product);

  useEffect(() => {
    fetch("http://localhost:8080/list")
      .then(response => response.json())
      .then(response_json => setProducts(response_json))
  }, []);

  const getFormData = (event) => {
    setProductObject({ ...productObject, [event.target.name]: event.target.value });
  }

  const registerProduct = () => {
    fetch("http://localhost:8080/register", {
      method: 'POST',
      body: JSON.stringify(productObject),
      headers: {
        'Content-type': 'application/JSON',
        'Accept': 'application/JSON'
      }
    })
      .then(response => response.json())
      .then(response_json => {
        if (response_json.message != undefined) {
          alert(response_json.message);
        }
        else {
          setProducts([...products, response_json])
          alert("Product registered!");
          clearForm();
        }
      });
  }

  const deleteProduct = () => {
    fetch("http://localhost:8080/delete/" + productObject.id, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/JSON',
        'Accept': 'application/JSON'
      }
    })
      .then(response => response.json())
      .then(response_json => {
        alert(response_json.message);

        let productsTemporary = [...products];
        let index = productsTemporary.findIndex((product) => {
          return product.id === productObject.id;
        });

        productsTemporary.splice(index, 1);

        setProducts(productsTemporary);
        clearForm();
      });
  }

  const updateProduct = () => {
    fetch("http://localhost:8080/update", {
      method: 'PUT',
      body: JSON.stringify(productObject),
      headers: {
        'Content-type': 'application/JSON',
        'Accept': 'application/JSON'
      }
    })
      .then(response => response.json())
      .then(response_json => {
        if (response_json.message != undefined) {
          alert(response_json.message);
        }
        else {
          alert("Product updated!");
          let productsTemporary = [...products];
          let index = productsTemporary.findIndex((product) => {
            return product.id === productObject.id;
          });

          productsTemporary[index] = productObject;

          setProducts(productsTemporary);
          clearForm();
        }
      });
  }

  const clearForm = () => {
    setProductObject(product);
    setRegisterBtn(true);
  }

  const selectProduct = (index) => {
    setProductObject(products[index]);
    setRegisterBtn(false);
  }

  return (
    <div>
      <Form registerBtn={registerBtn} getFormData={getFormData} registerProduct={registerProduct} productObject={productObject} clearForm={clearForm} deleteProduct={deleteProduct} updateProduct={updateProduct}/>
      <Table products={products} selectProduct={selectProduct} />
    </div>
  );
}

export default App;
