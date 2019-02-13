import React, { Component } from "react";
import Table from "./table/table";
import { Container, Col, Row, Button } from "reactstrap";
import useGeneratedData from "./table/useGeneratedData";

export default () => {
  const generatedData = useGeneratedData();
  return (
    <div className="App">
      <Container>
        <Row>
          <Col className="p-2">
            <Table rows={generatedData.rows} columns={generatedData.columns} />
          </Col>
        </Row>
        <Row>
          <Col className="p-2">
            <Button onClick={() => generatedData.setRows(generateNewData())}>
              New Data
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const generateNewData = () => {
  return [{ firstName: "Travis", lastName: "Moore", age: 35 }];
};
