import imagen2 from '../assets/img/imagen2.jpg'
import PropTypes from 'prop-types';

export const Imagen2 = ({ className}) => {
  return (
     <img src={imagen2} alt="paisajes del mundo" 
     className={className}/>
  )
}
Imagen2.propTypes = {
    className: PropTypes.string
}