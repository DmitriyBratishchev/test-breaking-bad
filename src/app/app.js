import React from 'react';
import PageListEpisodes from './components/page/pageListEpisodes';
import Header from './components/ui/header';

function App() {
  return (
    <div className='container'>
      <Header />
      <PageListEpisodes />
    </div>
  );
}

export default App;
