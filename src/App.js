import { useState } from 'react';
import { Layout } from 'antd';

import Header from './components/Header';
import Content from './components/Content';

function App() {
  const [section, setSection] = useState(0);

  return (
    <Layout>
      <Header setSection={setSection} />
      <Content section={section} />
    </Layout>
  );
}

export default App;
