
import React, { useState } from 'react';

import './form.scss';


export default function Form(props) {

  const [url, setUrl] = useState();
  const [method, setMethod] = useState('GET');
  const [body, setBody] = useState();

  const handleMethod = (event) => {
    let elems = document.querySelectorAll('span');
    elems.forEach(elem => elem.style.backgroundColor = "rgb(89, 105, 253)");
    document.getElementById(`${event.target.id}`).style.backgroundColor = "white";
    setMethod(event.target.id);
  }

  const handleBody = (event) => {
    event.preventDefault();
    let newBody = event.target.value;
    setBody(newBody);
  }

  const handleURL = (event) => {
    event.preventDefault();
    let newURL = event.target.value;
    setUrl(newURL);
  }

  const handleSubmit = event => {
    event.preventDefault();
    const formData = {
      method: method,
      url: url,
      body: null
    };
    if (body) formData.body = body;
    props.handleApiCall(formData);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <h2><strong>URL:</strong></h2>
          <h3>{method}</h3>
          <input name='url' type='text' onChange={handleURL} />
          <button type="submit"> GO ! </button>
        </label>
        <label className="methods" >
          <span data-testid="GET" id="GET" onClick={handleMethod}>GET</span>
          <span id="POST" onClick={handleMethod}>POST</span>
          <span id="PUT" onClick={handleMethod}>PUT</span>
          <span id="DELETE" onClick={handleMethod}>DELETE</span>
        </label>
        <div>
          {method === 'POST' || method === 'PUT' ? (
            <div className="flex flex-col">
              <label htmlFor="json">Write the body here ...</label>
              <textarea
                onChange={handleBody}
                type="textarea"
                id="textdata"
                defaultValue="{}"
              />
            </div>
          ) : null}
        </div>
      </form>
    </>
  );
}

