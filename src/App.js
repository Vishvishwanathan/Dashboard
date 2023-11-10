
import React,{useEffect,useState} from "react";
import "./App.css";
import Sidebar from "./component/Sidebar/Sidebar";
import InputComponent from "./component/elaments/inputs/input";
import Table from "./component/Table/Table";

const tableData=[
  {
    invoiceId:"#AHGA63",
    date:"29/10/2023",
    customerName:"Jacob Marcus",
    payableAmount:"1000",
    paidAmount:"500",
    due:"500",
   },
   {
    invoiceId:"#AHGA63",
    date:"29/10/2023",
    customerName:"Jacob Marcus",
    payableAmount:"1000",
    paidAmount:"500",
    due:"500",
   },
   {
    invoiceId:"#AHGA63",
    date:"29/10/2023",
    customerName:"Jacob Marcus",
    payableAmount:"1000",
    paidAmount:"500",
    due:"500",
   },
   {
    invoiceId:"#AHGA63",
    date:"29/10/2023",
    customerName:"Jacob Marcus",
    payableAmount:"1000",
    paidAmount:"500",
    due:"500",
   },
   {
    invoiceId:"#AHGA63",
    date:"29/10/2023",
    customerName:"Jacob Marcus",
    payableAmount:"1000",
    paidAmount:"500",
    due:"500",
   },
   {
    invoiceId:"#AHGA63",
    date:"29/10/2023",
    customerName:"Jacob Marcus",
    payableAmount:"1000",
    paidAmount:"500",
    due:"500",
   },
   {
    invoiceId:"#AHGA63",
    date:"29/10/2023",
    customerName:"Jacob Marcus",
    payableAmount:"1000",
    paidAmount:"500",
    due:"500",
   },
   {
    invoiceId:"#AHGA63",
    date:"29/10/2023",
    customerName:"Jacob Marcus",
    payableAmount:"1000",
    paidAmount:"500",
    due:"500",
   },
   {
    invoiceId:"#AHGA63",
    date:"29/10/2023",
    customerName:"Jacob Marcus",
    payableAmount:"1000",
    paidAmount:"500",
    due:"500",
   },
   {
    invoiceId:"#AHGA63",
    date:"29/10/2023",
    customerName:"Jacob Marcus",
    payableAmount:"1000",
    paidAmount:"500",
    due:"500",
   },
   {
    invoiceId:"#AHGA63",
    date:"29/10/2023",
    customerName:"Jacob Marcus",
    payableAmount:"1000",
    paidAmount:"500",
    due:"500",
   },
   
]

function App() {
  const [data, setData] =useState([]);
  useEffect(() =>{
      fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response)=> response.json())
      .then((json)=> setData(json));
  
  },[]);
  return(

    
    <div className="container">
        <div className="row">
            <div className="col-2">
               <Sidebar/>
            </div>
            <div className="col-10 p-5">
                <div className="row mb-5">
                    <p>Create Search here</p>
                    </div>
                  <h3>Seals Information</h3>
                
                <div className="row mb-5">
                    <div className="col-3">
                    <InputComponent
                      label="Customer"
                      id="CustomerName"
                      placeholder="Enter Customer Name"
                      Type="text"/>
                    </div>
                    <div class="col-3">
                      <InputComponent
                      label="Invoice ID"
                      id="CustomerName"
                      placeholder="Enter Invoice ID"
                      Type="text"/>
                      </div>
                    <div class="col-3">
                    <InputComponent
                      label="Start Name"
                      id="CustomerName"
                      placeholder="Enter Start Name"
                      Type="text"/>
                    </div>
                    <div class="col-3">
                    <InputComponent
                      label="End Name"
                      id="CustomerName"
                      placeholder="Enter End Name"
                      Type="text"/>
                    </div>
                </div>
                <div className="row px-2">
                   <Table data={tableData}/>
                </div>
            </div>
        </div>
    </div>
 

  );
}
  

export default App;