import PropTypes from 'prop-types'
 import Button from './Button'
const header = ({title}) => {
  
  return (
   <header className='header'>
       <h1 >
     {title}
     
       </h1>
       <Button color='green' text='hello'  />
       {/* <Button color='green' text='hello' />
       <Button color='orange' text='hello' />
       <Button color='red' text='hello' /> */}
   </header>
  )
}
  header.defaultProps = {
    title: 'hellow world',
  }
  header.prototype ={
      title:PropTypes.string.isRequired,

  }
//   const headingStyle ={
//       color:'red',backgroundColor:'black'
//   }

export default header 