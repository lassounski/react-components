import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./components/Menu/index"
import Star from "./components/Star"
import Button from './components/Button/Button';
import Badge from './components/Badge/Badge';

function App() {
  return (
    <div className="flex justify-center items-center  gap-5 flex-col">
      <h1 className="text-6xl">Your components go here</h1>
      
      <Star />

      <Button size="lg" variant="success">
        Click me
      </Button>

      <Badge>I am a good badge</Badge>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
