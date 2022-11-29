import './App.css';
import logo from '../src/images/logo.svg'
import BarChart from './components/BarChart';
import { useState } from 'react';
import { UserData } from './Data' 

function App() {
  const [ userData, setUserData ] = useState({
    labels: UserData.map((data) => data.day),
    datasets: [{
      data: UserData.map((data) => data.amount),
      backgroundColor: [
        "hsl(10, 79%, 65%)",
        "hsl(10, 79%, 65%)",
        "hsl(186, 34%, 60%)",
        "hsl(10, 79%, 65%)",
        "hsl(10, 79%, 65%)",
        "hsl(10, 79%, 65%)",
        "hsl(10, 79%, 65%)",
      ],
      borderRadius: "5"
    }],
    options: {
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          grid: {
            display: false,
            drawTicks: false,
            drawOnChartArea: false,
          },
          ticks: {
            display: false
          }
        },
        x: {
          grid: {
            display: false
          }
        }
      }
    } 
  })

  return (
    <div className="App">
      <div className='chart'>
        <div className='chart-balance'>
          <div className='balance-text'>
            <p>My balance</p>
            <h1>$921.48</h1>
          </div>
          <div className='balance-logo'>
            <img src={logo} alt='' />
          </div>
        </div>
        <div className='chart-bar'>
          <div className='bar'>
            <h1>Spending - Last 7 days </h1>
            <BarChart chartData={userData} />
          </div>
          <hr style={{marginTop: 40}}></hr>
          <div className='chart-bar-text'>
            <div className='chart-bar-text1'>
              <p>Total this month</p>
              <h1>$478.33</h1>
            </div>
            <div className='chart-bar-text2'>
              <p>+2.4%</p>
              <span>from last month</span>
            </div>
          </div>
        </div>
      </div>
      <p style={{marginTop: 20}}>Challenge by: FrontendMentor, Coded by: <a href="https://github.com/anielrussel">Russel M. Aniel</a></p>
    </div>
  );
}

export default App;
