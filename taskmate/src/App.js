import { useState } from 'react';
import './App.css';
import AddSub from './components/AddSub';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import Header from './components/Header';
import List from './components/List';


function App() {
  const [tasks, setTasks] = useState([])
  console.log('from app js file', tasks)
  return (
    <>
      <Header />
      <div className='App'>
        {/* <AddSub /> */}
        <main>
          <div className='listview'>
            <AddTask tasks={tasks} updateTasks={setTasks} />
            <List tasks={tasks} setTasks={setTasks} />
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
