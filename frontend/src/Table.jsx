const Table = ({ products, selectProduct }) => {
    return (
        <>
            <div className="table-div">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Brand</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{product.name}</td>
                                    <td>{product.brand}</td>
                                    <td><button className="btn btn-info" onClick={() => {selectProduct(index)}}>Select</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table;