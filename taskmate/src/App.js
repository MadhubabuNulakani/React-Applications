import './App.css';
import AddSub from './components/AddSub';
import Footer from './components/Footer';
import Header from './components/Header';
import List from './components/List';

const tasks = [
  { id: '123', name: 'Javascript', completed: true },
  { id: '345', name: 'node js', completed: true },
  { id: '346', name: 'dot net ', completed: false },
  { id: '567', name: 'angular', completed: true },
  { id: '789', name: 'react js', completed: false }
]

function App() {
  return (
    <>
      <Header />
      <div className='App'>
        <AddSub />
        <List tasks={tasks} />
      </div>
      <Footer />
    </>
  );
}

export default App;
