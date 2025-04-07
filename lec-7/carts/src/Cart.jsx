import React from "react";
// Ensure Bootstrap is included

let Cart = ({ cart }) => {
    console.log(cart);

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Shopping Cart</h1>
            <div className="row">
                {
                    cart.map((c) =>
                        c.products.map((p) => (
                            <div className="col-md-4 mb-4" key={p.id}>
                                <div className="card shadow-sm border-0">
                                    <img src={p.thumbnail} className="card-img-top" alt={p.title} style={{ height: "200px", objectFit: "contain" }} />
                                    <div className="card-body">
                                        <h5 className="card-title">{p.title}</h5>
                                        <p className="card-text text-muted">${p.price}</p>
                                        <p className="card-text">Quantity: {p.quantity}</p>
                                        <button className="btn btn-primary w-100">Remove</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )
                }
            </div>
        </div>
    );
}

export default Cart;
