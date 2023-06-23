import { useEffect, useState } from "react";
import { GetProducts } from "../../Configs/config";
import { CreateProduct } from "./CreateProduct";
import { ProductListing } from "./ProductListing";

export const Product = () => {
  const [products, setProducts] = useState();
  const [showProd, setShowProd] = useState(false);
  const [isAddProduct, setIsAddProduct] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    id: ""
  });

  useEffect(() => {
    (async () => {
      const prodData = await GetProducts();
      setProducts(prodData?.data?.products);
    })();
  }, []);

  const handleDelete = (id) => {
    let x = [...products];
    x = x.filter((data) => data.id !== id);
    setProducts(x);
  };

  const handleEdit = (id) => {
    setIsUpdating(true);
    let x = products.filter((data) => data.id === id);
    setFormData({
      title: x[0].title,
      description: x[0].description,
      price: x[0].price,
      id: x[0].id
    });
    setShowProd(false);
    setIsAddProduct(true);
  };

  const handleUpdate = (id) => {
    let x = products?.map((prevData) => {
      if (prevData.id === id) {
        return {
          title: formData.title,
          description: formData.description,
          price: formData.price,
          id: id
        };
      }
      return prevData;
    });
    setProducts(x);
    setIsUpdating(false);
    setIsAddProduct(false);
    setShowProd(true);
  };
  return (
    <>
      <div>
        <button
          onClick={() => {
            setFormData({
              title: "",
              description: "",
              price: "",
              id: ""
            });
            setIsAddProduct(!isAddProduct);
            setShowProd(false);
          }}
        >
          Add New Product
        </button>
        <button
          onClick={() => {
            setIsAddProduct(false);
            setShowProd(true);
          }}
        >
          All Products
        </button>
      </div>

      <div className="container">
        {isAddProduct ? (
          <CreateProduct
            setProducts={setProducts}
            setFormData={setFormData}
            formData={formData}
            products={products}
            setIsAddProduct={setIsAddProduct}
            setShowProd={setShowProd}
            showProd={showProd}
            isAddProduct={isAddProduct}
            setIsUpdating={setIsUpdating}
            isUpdating={isUpdating}
            handleUpdate={handleUpdate}
          />
        ) : (
          showProd && (
            <ProductListing
              products={products}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          )
        )}
      </div>
    </>
  );
};
