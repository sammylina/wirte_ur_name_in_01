import React from 'react';

import Switch from './components/Switch';
import Ascii from './components/Ascii';
import English from './components/English';

import { connect } from 'react-redux';

const mapState = (state) => {
  return { stack: state.stack };
};
const mapDispatch = (dispatch) => {
  return {
    addByte: function () {
      dispatch({ type: 'ADD_BYTE' });
    },
    removeByte: function () {
      dispatch({ type: 'REMOVE_BYTE' });
    },
  };
};

function App({ stack, addByte, removeByte }) {
  return (
    <div className="flex flex-row">
      <div className="basis-3/4">
        {stack.map((byte, idx) => (
          <>
            <English byte={byte} />
            <Ascii byte={byte} />
            <Switch byte={byte} idx={idx} />
            <br />
          </>
        ))}
        <br />
        <button className="font-sans" onClick={addByte}>
          Add Byte
        </button>
        <button onClick={removeByte}>Remove Byte</button>
      </div>
      <div className="basis-1/4">side Ascii values</div>
    </div>
  );
}

export default App = connect(mapState, mapDispatch)(App);
