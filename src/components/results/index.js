import React from 'react';
import './results.scss';
import ClipLoader from "react-spinners/ClipLoader";


export default function Results(props) {
  return (
    <section >
      <div className="box">
          <div id='loader'>
            {/* < ClipLoader loading={props.loading} size={150} /> */}
          </div>
        < pre > {props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre>
      </div>
    </section >
  );
}


