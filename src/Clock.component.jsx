import React from 'react';
import { Container, Centered } from './Clock.styles.js';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <Container>
        <Centered>{this.state.date.toLocaleTimeString()}</Centered>
      </Container>
    );
  }
}

export default Clock;

