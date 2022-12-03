const Form = ({ registerBtn, getFormData, registerProduct, productObject, clearForm, deleteProduct, updateProduct }) => {
    return (
        <>
            <div className="form">
                <form>
                    <input type="text" value={productObject.name} required onChange={getFormData} name="name" placeholder="name" className="form-control" />
                    <input type="text" value={productObject.brand} required onChange={getFormData} name="brand" placeholder="brand" className="form-control" />
                    {
                        registerBtn ? <button className="btn btn-success" onClick={registerProduct}>Register</button>
                            :
                            <div>
                                <button className="btn btn-primary" onClick={updateProduct}>Update</button>
                                <button className="btn btn-danger" onClick={deleteProduct}>Remove</button>
                                <button className="btn btn-warning" onClick={clearForm}>Cancel</button>
                            </div>
                    }
                </form>
            </div>
        </>
    )
}

export default Form;