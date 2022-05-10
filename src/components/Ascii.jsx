import React from 'react';

export default function Ascii({byte}) {
  let ascii_value = 0;
  byte.forEach((bit) => {
    ascii_value += (bit.value * 2 ** bit.position)
  })
  return (
    <span>{ascii_value}</span>
  )
}