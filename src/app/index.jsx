import React from 'react';
import { render } from 'react-dom';
import moment from 'moment';

const withHandle = Component => Component;

const Title = () => <h1>But not only as you want</h1>;

@withHandle
class Clock extends React.Component {
  componentDidMount() {
    setInterval(() => this.forceUpdate(), 1000);
  }
  check() {
    throw Error();
  }
  render() {
    return <span onClick={this.check}>{moment().format('hh:mm:ss MMM DD YYYY')}</span>;
  }
}

export const Root = () => (
  <div>
    <h1>Bundle is Worked</h1>
    <p>This work some here</p>
    <Title />
    <Clock />
  </div>
);

render(<Root />, document.querySelector('.root'));
