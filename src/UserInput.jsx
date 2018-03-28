//pkg imp
import React, { Component } from 'react'
import { TextInput } from 'belle'
//inner imp

export default () => (
    <div>
        <TextInput style={{ maxWidth: 100 }} /><span>X</span>
        <br></br>
        <TextInput style={{ maxWidth: 100 }} /><span>Y</span>
        <br></br>
        <span>RADIUS</span>
        <input
            type="range"
            min="2"
            max="5"
            step="0.01"
        />
    </div>
)
