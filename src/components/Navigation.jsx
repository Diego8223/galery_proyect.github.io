import { Link } from 'react-router-dom';
import { Imagen1 } from './imagen1';
import { Imagen2 } from './imagen2';
import { Imagen3 } from './imagen3';
import { Imagen4 } from './imagen4';
import { Imagen5 } from './imagen5';
import { Imagen6 } from './imagen6';

export const Navigation = () => {
  return (
    <div className='container thumbnail-container mt-2'>
      <Link to='/imagen1' className='links'>
        <figure className='thumbnail-image-size'>
          <Imagen1 />
          <figcaption>imagen 1</figcaption>
        </figure>
      </Link>
      <Link to='/imagen2' className='links'>
        <figure className='thumbnail-image-size'>
          <Imagen2 />
          <figcaption>imagen 2</figcaption>
        </figure>
      </Link>
      <Link to='/imagen3' className='links'>
        <figure className='thumbnail-image-size'>
          <Imagen3 />
          <figcaption>imagen 3</figcaption>
        </figure>
      </Link>
      <Link to='/imagen4' className='links'>
        <figure className='thumbnail-image-size'>
          <Imagen4 />
          <figcaption>imagen4</figcaption>
        </figure>
      </Link>
      <Link to='/imagen5' className='links'>
        <figure className='thumbnail-image-size'>
          <Imagen5 />
          <figcaption>imagen 5</figcaption>
        </figure>
      </Link>
      <Link to='/imagen6' className='links'>
        <figure className='thumbnail-image-size'>
          <Imagen6 />
          <figcaption>imagen 6</figcaption>
        </figure>
      </Link>
    </div>
  )
}