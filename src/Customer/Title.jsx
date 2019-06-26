import React from "react";
import { Link } from "react-router-dom";

import { CUSTOMER_LIST } from "../config/appConstants";

const Title = props => (
  <div>
    <h1>{CUSTOMER_LIST}</h1>
    <Link to="/AddCustomer">+</Link>
  </div>
);

export default Title;
