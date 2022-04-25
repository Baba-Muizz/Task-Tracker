
import React from 'react'
import propTypes from 'prop-types'
import Button from './Button'


const Header = ({title, onAdd, displayAdd}) => {
  

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color={displayAdd ? 'maroon' : 'green'} text={displayAdd ? 'Close' : 'Add'}
       onclick={onAdd}/>
    </header>
  )}


Header.defaultProps={
    title:'Task Tracker',
}
Header.propTypes ={
    title: propTypes.string.isRequired,
}



export default Header
