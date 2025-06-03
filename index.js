import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './Counter';
//import TodoList from './ToDoList';
//import ProfileCard from './ProfileCard';
//uncomment the import to run different question => question 3-5

function App() {
  return (
    <>
      <Counter />
      {/** <TodoList />*/}
      {/** <ProfileCard />*/}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;

