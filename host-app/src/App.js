import React, { Suspense } from 'react';
import { Input } from 'antd';

const RemoteApp1 = React.lazy(() => import("remoteApp1/App"));
const RemoteApp2 = React.lazy(() => import("remoteApp2/App"));

function App() {
  return (
    <div style={{ padding: '20px', border: 'solid 2px red', margin: "10px" }}>
      <h1>Host App - antd@^5.21.5</h1>
      <Input placeholder="Enter text here" />

      <Suspense fallback={<div>Loading remote component...</div>}>
        <RemoteApp1 />
      </Suspense>

      <Suspense fallback={<div>Loading remote component...</div>}>
        <RemoteApp2 windowId="app2" />
      </Suspense>
    </div>
  );
}

export default App;