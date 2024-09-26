import imagen3 from '../assets/img/imagen3.png'
import PropTypes from 'prop-types';

export const Imagen3 = ({ className}) => {
  return (
     <img src={imagen3} alt="paisajes del mundo" 
     className={className}/>
  )
}
Imagen3.propTypes = {
    className: PropTypes.string
}