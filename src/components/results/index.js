import React from 'react';
import './results.scss';
import RingLoader from "react-spinners/RingLoader";


export default function Results(props) {

  return (
    <section >
      <div className="box">
        {props.loading ? (
          <div id='loader'>
            < RingLoader size={200} color={'cyan'} />
          </div>
        ) : (
          < pre className="json"> {props.data ? JSON.stringify(props.data, null, 3) : null}</pre>
        )
        }
      </div>
    </section >
  );
}


