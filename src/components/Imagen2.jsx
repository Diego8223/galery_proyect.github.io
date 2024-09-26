import imagen2 from ' ,,/assets/img/imagen2.png';
import PropTypes from 'prop-types';

export const Imagen2 = ( className)  => {
return (
    <img src="Imagen2" alt="Automoviles de Lujo" 
  className= {"props.classname"} />
  )

}

Imagen2.PropTypes = {
    className= Proptypes.string
}