import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import { Row, Col, Container } from 'react-bootstrap';
import axios from 'axios';

export default function App() {

  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(null);
  const [requestParams, setRequest] = useState({});
  const [loading, setLoading] = useState(false);

  const handleApiCall = async (requestParams) => {
    setRequest(requestParams);
    let methodCall = requestParams.method.toLowerCase();
    const response = await axios[methodCall](requestParams.url, (requestParams.body) ? (requestParams.body) : null);
    setCounter(response.data.length)
    const result = {
      Headers: {
        "root": {
          "content-type": "application/json; charset=utf-8",
        }
      },
      results: {
        count: counter,
        data: response.data,
      }
    };
    setData(result);
    setLoading(true);
    setInterval(() => {
      setLoading(false);
    }, 3000);
  }


  return (
    <React.Fragment>
      <Header />
      <Container>
        <Row xs={1} md={2} className="g-4">
          <Col>
            <Form handleApiCall={handleApiCall} />
            <div>
              <div>Request Method: {requestParams.method}</div>
              <div>URL :  {requestParams.url}</div>
            </div>
          </Col>
          <Col>
            <Results data={data} loading={loading} />
          </Col>
        </Row>
        <Footer />
      </Container>
    </React.Fragment>
  );
}



