export const CreateProduct = (props) => {
  const {
    setProducts,
    products,
    setShowProd,
    setIsAddProduct,
    formData,
    setFormData,
    isUpdating,
    handleUpdate,
    setIsUpdating
  } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isUpdating) {
      handleUpdate(formData.id);
      setIsUpdating(false);
    } else {
      const id = products.length + 1;
      setProducts((prevData) => {
        return [
          ...prevData,
          {
            title: formData.title,
            description: formData.description,
            price: formData.price,
            id: id
          }
        ];
      });
      setIsAddProduct(false);
      setShowProd(true);
    }
  };

  return (
    <div className="container">
      <h1>{!isUpdating ? "Create Product" : "Edit Product"}</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {isUpdating ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
};
