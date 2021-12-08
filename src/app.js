import React, { useState, useReducer } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import { Row, Col, Container } from 'react-bootstrap';
import axios from 'axios';
import History from './components/history';

export const ACTIONS = {
  ADD_TO_HISTORY: 'ADD_TO_HISTORY',
  DELETE_FROM_HISTORY: 'DELETE_FROM_HISTORY',
}

function reducer(histories, action) {
  switch (action.type) {
    case ACTIONS.ADD_TO_HISTORY:
      return [...histories, newHistory(action.payload)]
    case ACTIONS.DELETE_FROM_HISTORY:
      return [...histories, action.payload]
    default:
      return histories
  }
}

function newHistory(action) {
  return { id: Date.now(), history: action }
}

export default function App() {

  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(null);
  const [requestParams, setRequest] = useState({});
  const [loading, setLoading] = useState(false);
  const [histories, dispatch] = useReducer(reducer, []);

  const handleApiCall = async (request) => {
    setRequest(request);
    let methodCall = request.method.toLowerCase();
    const response = await axios[methodCall](request.url, (request.body) ? (request.body) : null);
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

    dispatch({ type: ACTIONS.ADD_TO_HISTORY, payload: { requestParams: request, data: result } });

  }


  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Container>
            <Row xs={1} md={2} className="g-4">
              <Col>
                <Form handleApiCall={handleApiCall} />
                <div>
                  <div>Request Method: <strong>{requestParams.method}</strong></div>
                  <div>URL :  {requestParams.url}</div>
                </div>
              </Col>
            </Row>
            <Row xs={1} md={2} className="g-1">
              <Col>
                <Results data={data} loading={loading} />
              </Col>
            </Row>
          </Container>
          <Footer />
        </Route>
        <Route path="/history">
          <History histories={histories} />
        </Route>
        <Route path="/contact">
          <h1>conatact us </h1>
        </Route>
      </Switch>
    </Router>
  );
}



