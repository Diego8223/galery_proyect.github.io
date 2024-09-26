import imagen5 from '../assets/img/imagen5.png'
import PropTypes from 'prop-types';

export const Imagen5 = ({ className}) => {
  return (
     <img src={imagen5} alt="paisajes del mundo" 
     className={className}/>
  )
}
Imagen5.propTypes = {
    className: PropTypes.string
}