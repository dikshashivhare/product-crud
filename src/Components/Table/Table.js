export const Table = (props) => {
  const { data, handleDelete, handleEdit } = props;
  return (
    <div className="table-responsive">
      <table className="table">
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Description</th>
          <th>Price</th>
        </tr>
        <tr>
          <td>{data.id}</td>
          <td>{data.title}</td>
          <td>{data.description}</td>
          <td>{data.price}</td>
        </tr>
        <button onClick={() => handleDelete(data.id)}>Delete</button>
        <button onClick={() => handleEdit(data.id)}>Edit</button>
      </table>
    </div>
  );
};
