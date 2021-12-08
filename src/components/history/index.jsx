import React, { useEffect, useState } from 'react';
import './history.scss';
import { Container } from 'react-bootstrap';

export default function History(props) {
    const [flag, setflag] = useState(false);

    return (
        <Container>
            <div>
                {props.histories.map(history => {
                    return (
                        <>
                            <div className="history" key={history.id} onClick={() => setflag(true)} onDoubleClick={() => setflag(false)}>
                                <h4>{history.history.requestParams.method}</h4>
                                <h4>{history.history.requestParams.url}</h4>
                            </div>
                            {flag &&
                                <div className="box">
                                    < pre > {history.history.data ? JSON.stringify(history.history.data, null, 3) : null}</pre>
                                </div>
                            }
                        </>
                    )
                })
                }
            </div>
        </Container>
    )
}


