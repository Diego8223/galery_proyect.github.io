import imagen4 from ' ,,/assets/img/imagen4.png';
import PropTypes from 'prop-types';

export const Imagen4 = ( className)  => {
return (
    <img src="Imagen4" alt="Automoviles de Lujo" 
  className= {"props.classname"} />
  )

}

Imagen4.PropTypes = {
    className= Proptypes.string
}