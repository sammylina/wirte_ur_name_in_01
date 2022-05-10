import React from 'react';

export default function English({byte}) {
  let letter = 0;
  byte.forEach(bit => {
    letter += (bit.value * 2 ** bit.position)
  })

  return (
    <>
    {(letter <= 90 && letter >= 65) || (letter <=122 && letter >= 97 ) ? String.fromCharCode(letter) : ""}
    </>
  )
}