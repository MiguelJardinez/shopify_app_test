import Link from 'next/link';
import Principal from '../layouts/Principal';

const configuraciones = () => {
  return (
    <Principal>
      <div>
        <p>Soy la lista de configuraciones</p>
        <Link href="/">Ver la pagina de inicio</Link>
      </div>
    </Principal>
  )
}

export default configuraciones
  