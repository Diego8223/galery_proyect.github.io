import imagen1 from '../assets/img/imagen1.png'
import PropTypes from 'prop-types';

export const Imagen1 = ({ className}) => {
  return (
     <img src={imagen1} alt="paisajes del mundo" 
     className={className}/>
  )
}
Imagen1.propTypes = {
    className: PropTypes.string
}