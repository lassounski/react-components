import React from 'react';
import ReactDOM from 'react-dom/client';
import { PiFlowerLotusThin } from "react-icons/pi";
import Badge from './components/Badge';
import Banner from './components/Banner';
import Card from './components/Card';
import Testimonial from './components/Testimonial';
import Tooltip from './components/Tooltip';
import './style.css'

function App() {
  return (
    <div className="flex justify-center items-center gap-6 flex-col mx-auto w-10/12 my-10">

      <p className="text-6xl m-4">Badges</p>
      <div className="flex flex-col justify-between gap-6 md:flex-wrap md:flex-row">
        <Badge color="red" shape="pill">Badge</Badge>
        <Badge color="blue" shape="square">Badge</Badge>
        <Badge color="green" shape="circle">Badge</Badge>
        <Badge color="yellow" shape="pill">Badge</Badge>
        <Badge color="purple" shape="square">Badge</Badge>
        <Badge color="pink" shape="pill">Badge</Badge>
      </div>

      <p className="text-6xl m-4">Banners</p>
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

      <p className="text-6xl m-4">Cards</p>
      <div className="flex flex-col justify-center gap-6 ">
        <Card title="Reverence for Life" icon={<PiFlowerLotusThin className="bg-purple-500" />}>
          Aware of the suffering caused by the destruction of life, I am committed to cultivating the insight of interbeing and compassion and learning ways to protect the lives of people, animals, plants, and minerals.
        </Card>
        <Card className="mt-10" >
          No mud, no lotus
        </Card>
      </div>

      <p className="text-6xl m-4">Testimonials</p>
      <div className="flex flex-col justify-center gap-6 ">
        <Testimonial picture={<img src="/kirill.png" alt="Kirill Lassounski" />} author="Kirill Lassounski" title="FreelanceGuru, Founder">
          Aware of the suffering caused by the destruction of life, I am committed to cultivating the insight of interbeing and compassion and learning ways to protect the lives of people, animals, plants, and minerals.
        </Testimonial>
        <Testimonial>
          Aware of the suffering caused by the destruction of life, I am committed to cultivating the insight of interbeing and compassion and learning ways to protect the lives of people, animals, plants, and minerals.
        </Testimonial>
      </div>


      <p className="text-6xl m-4">Testimonials</p>
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
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
