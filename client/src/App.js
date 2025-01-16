import './App.css';
import Footer from './shared/footer/footer';
import Header from './shared/header/header';
import Dashboard from './pages/dashboard/dashboard';

function App() {
  return (
    <div id='page-container'>
      <div id='content-wrap'>
        <Header></Header>
        <Dashboard></Dashboard>
      </div>
      <Footer id='footer'></Footer>
    </div>
  );
}

export default App;
