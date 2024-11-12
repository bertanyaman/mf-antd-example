import React, { useRef } from 'react';
import root from 'react-shadow';
import Components from './Components';

function App() {
  const node = useRef(null);
  const [domReady, setDomReady] = React.useState(false);

  React.useEffect(() => {
    // You can interact with the shadowRoot here if needed
    if (node.current) {
      setDomReady(true);
    }
  }, []);

  return (
    <root.div className="mf-app-v2" ref={node} mode={'open'}>
      <div style={{ padding: '20px', border: 'solid 2px green', margin: "10px 0" }}>
        <h1>Micro App v1 - antd@^5.19.3</h1>
        {domReady && <Components container={node.current.shadowRoot} />}
      </div>
    </root.div>
  );
}

export default App;