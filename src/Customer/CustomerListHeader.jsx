import React from "react";
import { Row, Col } from "react-bootstrap";

const CustomerListHeader = props => {
  return (
    <Row>
      <Col className="table-header">Name</Col>
      <Col className="table-header">Type</Col>
      <Col className="table-header">Description</Col>
      <Col className="table-header">Charges</Col>
      <Col className="table-header">Action</Col>
    </Row>
  );
};

export default CustomerListHeader;
