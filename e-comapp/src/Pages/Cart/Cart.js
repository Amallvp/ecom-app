import React from 'react'

function Cart() {
    return (
        <div className="cart">
            <table className="cart-table">
                <tr className="table-row">
                    <th className="table-head">Image</th>
                    <th className="table-head">Name</th>
                    <th className="table-head">Price</th>
                    <th className="table-head">Quantity</th>
                    <th className="table-head">Total</th>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                </tr>
            </table>
        </div>
    )
}

export default Cart