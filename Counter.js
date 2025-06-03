import React, { useState } from 'react';
import './counter.css';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="container">
            <div className="card-body">
                <h1>Counter</h1>
                <h2 className="countnum">{count}</h2>
                <div className="btnType">
                    <div className="btnType">
                        <button
                            className="btn btn-inc"
                            onClick={() => setCount(count + 1)}
                        > +
                        </button>
                        <button
                            className="btn btn-dec"
                            onClick={() => setCount(count - 1)}
                            disabled={count === 0}
                        >-
                        </button>
                        <button
                            className="btn btn-reset"
                            onClick={() => setCount(0)}
                            disabled={count === 0}
                        >Reset
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Counter;