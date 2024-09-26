import imagen3 from ' ,,/assets/img/imagen3.png';
import PropTypes from 'prop-types';

export const Imagen3 = ( className)  => {
return (
    <img src="Imagen3" alt="Automoviles de Lujo" 
  className= {"props.classname"} />
  )

}

Imagen3.PropTypes = {
    className= Proptypes.string
}