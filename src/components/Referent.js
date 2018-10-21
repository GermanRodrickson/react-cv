import React from 'react'
import styled from "styled-components";


const Referent = (props) => {
  
  let name = props.name ? props.name : 'no name';
  let description = props.description ? props.description : 'no description';
  let photo = props.photo ? props.photo :'no photo';

  return (
  <section>
    <h2>{name}</h2> 
    <p>{description}</p> 
    <p>{photo}</p>
  </section>
  )
}

export default Referent 