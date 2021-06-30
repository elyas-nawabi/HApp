import logo from './logo.svg';
import './App.css';
import "tailwindcss/tailwind.css"
import Header from "./components/Header";
import Features from "./components/Features";
import Search from "./components/Search";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
        <Header />
        <Search />
        <Features />
        <Footer />
    </div>
  );
}

export default App;
