import React from 'react';
import './results.scss';

export default function Results(props) {
  return (
    <section>
      <div className="box">
        <pre>{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre>
      </div>
    </section>
  );
}


