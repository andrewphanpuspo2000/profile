import logo from './logo.svg';
import './App.css';
import { Header } from './src/components/header/Header';
import { Hero } from './src/components/hero/Hero';
import { Education } from './src/components/education/Education';

function App() {
  return (
    <div className="App">
       
      <div class="bg"></div>
      <div class="star-field">
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>
      </div>
      <Header/>
      <Hero/>
       <Education/>
    </div>
  );
}

export default App;
