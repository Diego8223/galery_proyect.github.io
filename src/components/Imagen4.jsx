import imagen4 from '../assets/img/imagen4.png'
import PropTypes from 'prop-types';

export const Imagen4 = ({ className}) => {
  return (
     <img src={imagen4} alt="paisajes del mundo" 
     className={className}/>
  )
}
Imagen4.propTypes = {
    className: PropTypes.string
}