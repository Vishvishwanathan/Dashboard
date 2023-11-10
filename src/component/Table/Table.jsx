import React from "react";
import"./Table.css";

export default function Table({ data = [] }){
 return(
    <table className="table table-hover">
    <thead>
        <tr>
            <th scope="col" className="selector">
                <input className="form-check-input" type="checkbox" value="" id=""/>
            </th>
            <th scope="col">Invoive ID</th>
            <th scope="col">Date</th>
            <th scope="col">Customer</th>
            <th scope="col">Payable Amount</th>
            <th scope="col">Paid Amount</th>
            <th scope="col">Due</th>
        </tr>
    </thead>
    <tbody>
        {data &&
            data.map((d,i)=>(
        <tr>
            <th scope="row" className="selector">
                <input className="form-check-input" type="checkbox" value="" id=""/>
            </th>
                <th>{d.invoiceId}</th>
                <th>{d.date}</th>
                <th>{d.customerName}</th>
                <th>{d.payableAmount}</th>
                <th>{d.paidAmount}</th>
                <th>{d.due}</th>
        </tr>
            ))}
    </tbody>
</table>
 );
}