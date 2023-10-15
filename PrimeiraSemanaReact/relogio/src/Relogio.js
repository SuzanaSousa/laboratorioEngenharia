import React from 'react';
import './Relogio.css';


function DataFormatada(props) {
  const timeOptions = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false, 
  };

  const formattedTime = props.date.toLocaleTimeString([], timeOptions);

  return (
    <div className="clock-box">
      <span className="clock-text"></span>
      <span className="clock-time">{formattedTime}</span>
    </div>
  );
  }

class Clock extends React.Component {
  constructor(props) {
    super().state = { date: new Date() };
  }
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }
  render() {
    return (
      <div>
        <h1 class="text-center">Relógio</h1>
        <DataFormatada date={this.state.date} />
      </div>
    );
  }
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {}
        <Clock />
      </header>
    </div>
  );
}
export default App;