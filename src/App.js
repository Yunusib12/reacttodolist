import React from 'react';
import Header from './components/header';
import Task from './components/taskList';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Task />
    </React.Fragment>
  );
}

export default App;
