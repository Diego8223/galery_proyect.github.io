import imagen6 from '../assets/img/imagen6.png'
import PropTypes from 'prop-types';

export const Imagen6 = ({ className}) => {
  return (
     <img src={imagen6} alt="paisajes del mundo" 
     className={className}/>
  )
}
Imagen6.propTypes = {
    className: PropTypes.string
}