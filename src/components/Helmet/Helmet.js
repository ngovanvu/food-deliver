import React from 'react'

const Helmet = (props) => {
    document.title  = 'Food ordering app -' + props.title;
    {/* Title tren tag */}
  return (
    <div className='W-100'>
      {props.children}
    </div>
  )
}

export default Helmet
