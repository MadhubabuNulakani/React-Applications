import logo from './logo.svg';
import './App.css';
import Greet from './components/functional/Greet';
import Welcome from './components/class/Welcome';
import Hello from './components/functional/Hello';
import Message from './components/class/Message';
import Counter from './components/class/Counter';
import EventBind from './components/class/EventBind';
import PdfCanvasViewer from './components/functional/PdfCanvasViewer';
import Parent from './components/class/Parent';
import Form from './components/class/Form';
import PDFWithLine from './components/PdfView';

function App() {

  return (
    <div className="App">
      <PDFWithLine fileUrl="file:///D:/Files/AccountStatement_8347738886_1.pdf"/>
    </div>
  );
}

export default App;
