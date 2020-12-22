import React from "react";
import DataTable from "./DataTable";

const headCells = [
  { id: "name", numeric: false, disablePadding: true, label: "Name" },
  { id: "username", numeric: false, disablePadding: false, label: "Username" },
  { id: "country", numeric: false, disablePadding: false, label: "Country" },
  { id: "type", numeric: false, disablePadding: false, label: "Type" },
  { id: "balance", numeric: false, disablePadding: false, label: "Balance" },
  { id: "category", numeric: false, disablePadding: false, label: "Category" },
  { id: "status", numeric: false, disablePadding: false, label: "Status" },
  { id: "extra", numeric: false, disablePadding: false, label: "" },
  { id: "", numeric: false, disablePadding: false, label: "" },
];
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  {
    name: "Apurba Das",
    username: "apurba00",
    mail: "apurba@gmail.com",
    country: "United State",
    type: "Buyer",
    balance: "$100.00",
    category: "Website and IT",
    status: "Approved",
  },
  {
    name: "Apurba Das1",
    username: "apurba11",
    mail: "apurba@gmail.com",
    country: "United State",
    type: "Buyer",
    balance: "$100.00",
    category: "Website and IT",
    status: "Approved",
  },
  {
    name: "Apurba Das2",
    username: "apurba22",
    mail: "apurba@gmail.com",
    country: "United State",
    type: "Buyer",
    balance: "$100.00",
    category: "Website and IT",
    status: "Approved",
  },
  {
    name: "Apurba Das3",
    username: "apurba22",
    mail: "apurba@gmail.com",
    country: "United State",
    type: "Buyer",
    balance: "$100.00",
    category: "Website and IT",
    status: "Approved",
  },
  {
    name: "Apurba Da4",
    username: "apurba22",
    mail: "apurba@gmail.com",
    country: "United State",
    type: "Buyer",
    balance: "$100.00",
    category: "Website and IT",
    status: "Approved",
  },
  {
    name: "Apurba Das5",
    username: "apurba22",
    mail: "apurba@gmail.com",
    country: "United State",
    type: "Buyer",
    balance: "$100.00",
    category: "Website and IT",
    status: "Approved",
  },
  {
    name: "Apurba Das6",
    username: "apurba22",
    mail: "apurba@gmail.com",
    country: "United State",
    type: "Buyer",
    balance: "$100.00",
    category: "Website and IT",
    status: "Approved",
  },
  {
    name: "Apurba Das7",
    username: "apurba22",
    mail: "apurba@gmail.com",
    country: "United State",
    type: "Buyer",
    balance: "$100.00",
    category: "Website and IT",
    status: "Approved",
  },
  {
    name: "Apurba Das8",
    username: "apurba22",
    mail: "apurba@gmail.com",
    country: "United State",
    type: "Buyer",
    balance: "$100.00",
    category: "Website and IT",
    status: "Approved",
  },
  {
    name: "Apurba Das9",
    username: "apurba22",
    mail: "apurba@gmail.com",
    country: "United State",
    type: "Buyer",
    balance: "$100.00",
    category: "Website and IT",
    status: "Approved",
  },
  {
    name: "Apurba Das10",
    username: "apurba22",
    mail: "apurba@gmail.com",
    country: "United State",
    type: "Buyer",
    balance: "$100.00",
    category: "Website and IT",
    status: "Approved",
  },
  {
    name: "Apurba Das11",
    username: "apurba22",
    mail: "apurba@gmail.com",
    country: "United State",
    type: "Buyer",
    balance: "$100.00",
    category: "Website and IT",
    status: "Approved",
  },
  {
    name: "Apurba Das12",
    username: "apurba22",
    mail: "apurba@gmail.com",
    country: "United State",
    type: "Buyer",
    balance: "$100.00",
    category: "Website and IT",
    status: "Approved",
  },
];

function Freelancers() {
  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <DataTable headCells={headCells} rowsData={rows} />
      </div>
    </div>
  );
}

export default Freelancers;
