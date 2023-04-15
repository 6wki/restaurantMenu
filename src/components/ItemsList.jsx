import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";

const ItemsList = ({ idata }) => {
  return (
    <Row>
      <Zoom>
        {idata.length >= 1 ? (
          idata.map((item) => {
            return (
              <Col key={item.id} sm="12" className="mb-3">
                <Card className="d-flex flex-row-reverse">
                  <Card.Img className="simg" variant="top" src={item.image} />
                  <Card.Body dir="rtl">
                    <div className="d-flex justify-content-between">
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Title className="price">
                        <item className="price">{item.price}</item>
                      </Card.Title>
                    </div>
                    <Card.Text>
                      مع عرض يتسنّى الحيلولة, مكن تم غينيا التاريخ، استراليا،.
                      أن وفنلندا الدّفاع والإتحاد جعل, وقد بفرض عملية و. بال
                      الغالي الثقيلة ما. دار كل حلّت وجزر الانجليزية, ثم كما
                      هاربر الأمم الأثنان. شيء تم جسيمة الربيع،. الدول ديسمبر
                      غير تم, غير حاول ودول كل, ثم الأحمر الضروري الأوروبية قبل.
                      حلّت تجهيز أثره، وقد بل. قام إختار الأول و, به، الساحة
                      الساحل أن. والكوري الأوروبي وصل إذ. لم وسمّيت وقوعها، بلا.
                      إعادة لهيمنة التحالف يتم مع, مع تصفح أوسع الشتاء، بعد. كان
                      الله بالحرب مع, أسر بـ فبعد الدولارات, الشهير اللازمة أي
                      بحث. حصدت
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })
        ) : (
          <h1>لا يوجد طعام</h1>
        )}
      </Zoom>
    </Row>
  );
};

export default ItemsList;
