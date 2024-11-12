import React from 'react';
import ReactDOM from 'react-dom';
import { PiFlowerLotusThin } from "react-icons/pi";
import Badge from './components/Badge';
import Banner from './components/Banner';
import Card from './components/Card';
import Testimonial from './components/Testimonial';
import Tooltip from './components/Tooltip';
import ToastPopup from './components/ToastPopup/ToastPopup';
import './style.css'
import ToastPopupProvider from './components/ToastPopup/ToastPopupProvider';
import { useToast } from "./components/ToastPopup/ToastPopupProvider";

function App() {
  const { addPopup } = useToast();

  const handleAddPopup = (type) => {
    addPopup(
        <ToastPopup type={type}>
            This is a {type} message!
        </ToastPopup>
    );
};

  return (
    <div id="main" className="flex justify-center items-center gap-6 flex-col mx-auto w-10/12 my-10 relative">

      <p className="text-6xl m-2">Badges</p>
      <p className="text-md m-1">Tiny colored badges with text.</p>
      <div className="flex flex-col justify-between gap-6 md:flex-wrap md:flex-row">
        <Badge color="red" shape="pill">Badge</Badge>
        <Badge color="blue" shape="square">Badge</Badge>
        <Badge color="green" shape="circle">Badge</Badge>
        <Badge color="yellow" shape="pill">Badge</Badge>
        <Badge color="purple" shape="square">Badge</Badge>
        <Badge color="pink" shape="pill">Badge</Badge>
      </div>

      <p className="text-6xl m-2">Banners</p>
      <p className="text-md m-1">Large boxes with content or without. Changing shape.</p>
      <div className="flex flex-col justify-center gap-6 md:flex-wrap md:flex-row">
        <Banner type="error" >Aware of the suffering caused by the destruction of life, I am committed to cultivating the insight of interbeing and compassion and learning ways to protect the lives of people, animals, plants, and minerals.</Banner>
        <Banner type="neutral" title="Check this out">Aware of the suffering caused by the destruction of life, I am committed to cultivating the insight of interbeing and compassion and learning ways to protect the lives of people, animals, plants, and minerals.</Banner>
        <Banner />
        <Banner type="warning" >Aware of the suffering caused by the destruction of life, I am committed to cultivating the insight of interbeing and compassion and learning ways to protect the lives of people, animals, plants, and minerals.</Banner>
        <Banner type="success" >Aware of the suffering caused by the destruction of life, I am committed to cultivating the insight of interbeing and compassion and learning ways to protect the lives of people, animals, plants, and minerals.</Banner>
        <Banner>Aware of the suffering caused by the destruction of life, I am committed to cultivating the insight of interbeing and compassion and learning ways to protect the lives of people, animals, plants, and minerals.</Banner>
        <Banner type="success" ></Banner>
        <Banner type="error" title="Ops"></Banner>
        <Banner type="waring">Its a problem</Banner>
      </div>

      <p className="text-6xl m-2">Cards</p>
      <p className="text-md m-1 mb-8">Cards with title, text, icon (optional - default available)</p>
      <div className="flex flex-col justify-center gap-6 ">
        <Card title="Reverence for Life" icon={<PiFlowerLotusThin className="bg-purple-500" />}>
          Aware of the suffering caused by the destruction of life, I am committed to cultivating the insight of interbeing and compassion and learning ways to protect the lives of people, animals, plants, and minerals.
        </Card>
        <Card className="mt-10" >
          No mud, no lotus
        </Card>
      </div>

      <p className="text-6xl m-2">Testimonials</p>
      <p className="text-md m-2">Mobile first, adjust on resize, image (optional)
      </p>
      <div className="flex flex-col justify-center gap-6 ">
        <Testimonial picture={<img src="/kirill.png" alt="Kirill Lassounski" />} author="Kirill Lassounski" title="FreelanceGuru, Founder">
          Aware of the suffering caused by the destruction of life, I am committed to cultivating the insight of interbeing and compassion and learning ways to protect the lives of people, animals, plants, and minerals.
        </Testimonial>
        <Testimonial>
          Aware of the suffering caused by the destruction of life, I am committed to cultivating the insight of interbeing and compassion and learning ways to protect the lives of people, animals, plants, and minerals.
        </Testimonial>
      </div>


      <p className="text-6xl m-4">Tooltips</p>
      <p className="text-md m-2">You can close them</p>
      <div className="flex flex-col justify-center gap-6 ">
        <Tooltip title="Daily Dharma">Aware of the suffering caused by the destruction of life.</Tooltip>
        <Tooltip title="Daily Dharma" color="pink">Aware of the suffering caused by the destruction of life.</Tooltip>
        <Tooltip title="Daily Dharma" style="bold">Aware of the suffering caused by the destruction of life.</Tooltip>
        <Tooltip title="Daily Dharma" color="blue" style="bold">Aware of the suffering caused by the destruction of life.</Tooltip>
        <Tooltip
          title="Daily Dharma"
          color="green"
          style="light"
          closeCallback={() => console.log('green button closed!')}>Aware of the suffering caused by the destruction of life.</Tooltip>
      </div>

      <p className="text-6xl m-4">Toast Popups</p>
      <p className="text-md m-2">Click a few buttons</p>
      <div className="flex flex-col md:flex-row justify-center gap-6 ">
        <button
          onClick={() => handleAddPopup('success')}
          className="px-4 py-2 bg-green-300 text-gray-800 font-semibold rounded-md shadow-md hover:bg-green-400 hover:text-green-900 transition-colors duration-300">
          Sucess
        </button>
        <button
          onClick={() => handleAddPopup('error')}
          className="px-4 py-2 bg-red-300 text-gray-800 font-semibold rounded-md shadow-md hover:bg-red-400 hover:text-red-900 transition-colors duration-300">
          Error
        </button>
        <button
          onClick={() => handleAddPopup('warning')}
          className="px-4 py-2 bg-yellow-300 text-gray-800 font-semibold rounded-md shadow-md hover:bg-yellow-400 hover:text-yellow-900 transition-colors duration-300">
          Warning
        </button>
        <button
          onClick={() => handleAddPopup('information')}
          className="px-4 py-2 bg-blue-300 text-gray-800 font-semibold rounded-md shadow-md hover:bg-blue-400 hover:text-blue-900 transition-colors duration-300">
          Information
        </button>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <ToastPopupProvider>
    <App />
  </ToastPopupProvider>
);
