import imagen5 from ' ,,/assets/img/imagen5.png';
import PropTypes from 'prop-types';

export const Imagen5 = ( className)  => {
return (
    <img src="Imagen5" alt="Automoviles de Lujo" 
  className= {"props.classname"} />
  )

}

Imagen5.PropTypes = {
    className= Proptypes.string
}