import React from "react";
import ReactDom from "react-dom";
import {Quotes} from './quotes'
import './quotes.css'

const GenerateQuotes = () => {
  return <Quotes/>
}
// const url =   'https://motivational-quotes1.p.rapidapi.com/motivation'



ReactDom.render(<GenerateQuotes/>,document.getElementById('root'))