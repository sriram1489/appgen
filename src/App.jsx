import React from 'react';
import { connect } from 'react-redux';
import { loadInitDataThunkAction } from './redux/generic';

class App extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }


  async componentWillMount() {
    const { loadInitDataThunkAction } = this.props;
    await loadInitDataThunkAction();
    await this.loadDataToState();
  }

  loadDataToState = async () => {
    const { data } = this.props;
    const dataMock = JSON.parse(JSON.stringify(data));
    this.setState({ data: dataMock });
  }

  render() {
    const { data } = this.state;
    return (

      <div>
        <ul>
          {data.map((entry) =>
            <li>{entry.name}</li>
          )}
        </ul>

      </div>

    )
  }
}

const mapStateToProps = (state) => ({
  data: state.generic.initData
})

const mapDispatchToProps = {
  loadInitDataThunkAction
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
