import React from 'react';
import { browserHistory } from 'react-router';

const Button = () => (
  <div
    className="goback_button"
    onClick={() => browserHistory.push('/')}
  >
    <h1>Go Back</h1>
  </div>
);

export default Button;