import React from 'react';
import ReactDOM from 'react-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { SWRConfig } from 'swr';

import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';

import App from './App';
import { ErrorFallback } from './components/ErrorFallback';

async function fetcher(url: string) {
  const rsp = await fetch(url);
  if (rsp.ok) {
    const data = await rsp.json();
    return data;
  } else {
    throw new Error(rsp.statusText);
  }
}

ReactDOM.render(
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <React.StrictMode>
      <SWRConfig value={{ fetcher }}>
        <App />
      </SWRConfig>
    </React.StrictMode>
  </ErrorBoundary>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
