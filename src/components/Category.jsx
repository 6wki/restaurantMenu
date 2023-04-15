import React from "react";
import { Row, Col } from "react-bootstrap";

const Category = ({ filterCate, allcate }) => {
  const filtering = (catg) => {
    filterCate(catg);
  };
  return (
    <Row className="my-2 mb-5">
      <Col sm="12" className="d-flex justify-content-center">
        {allcate.length >= 1 ? (
          allcate.map((ct) => {
            return (
              <button onClick={() => filtering(ct)} className="btn mx-2">
                {ct}
              </button>
            );
          })
        ) : (
          <h4>ليس هناك أي تصنيفات</h4>
        )}
      </Col>
    </Row>
  );
};

export default Category;
