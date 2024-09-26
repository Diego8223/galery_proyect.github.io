import imagen1 from ' ,,/assets/img/imagen1.png';
import PropTypes from 'prop-types';

export const Imagen1 = ( className)  => {
return (
    <img src="Imagen1" alt="Automoviles de Lujo" 
  className= {"props.classname"} />
  )

}

Imagen1.PropTypes = {
    className= Proptypes.string
}