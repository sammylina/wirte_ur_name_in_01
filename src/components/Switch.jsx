import React from 'react';

import {connect} from 'react-redux';

const mapDispatch = (dispatch) => {
  return {switchBit: function(i, j) {
    dispatch({type: 'SWITCH_BIT', i, j})
  }}
}

function Switch({byte, idx, switchBit}) {

  function updateBit(i, j) {
    switchBit(i, j)
  }
  return (
    <>
    {
      byte.map((bit, j) => (
        <button onClick={() => updateBit(idx, j)}>{bit.value ? "1" : "0"}</button>
      ))
    }
    </>
  )
}

export default Switch = connect(null, mapDispatch)(Switch);