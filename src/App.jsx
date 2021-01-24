import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { loadInitDataThunkAction } from './redux/generic';

function App(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    props.loadInitDataThunkAction();
    const dataMock = JSON.parse(JSON.stringify(props.data));
    setData(dataMock);
  });

  return (
    <div>
      <ul>
        {data.map((entry) =>
          <li>{entry.name}</li>
        )}
      </ul>
    </div>
  );

}

const mapStateToProps = (state) => ({
  data: state.generic.initData
})

const mapDispatchToProps = {
  loadInitDataThunkAction
}

export default connect(mapStateToProps, mapDispatchToProps)(App);