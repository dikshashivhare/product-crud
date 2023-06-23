import { Table } from "../Table/Table";

export const ProductListing = (props) => {
  const { products, handleDelete, handleEdit } = props;
  return (
    <>
      {products?.map((data) => {
        return (
          <Table
            data={data}
            key={data.id}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        );
      })}
    </>
  );
};
