import React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';

export default function TabNavigator() {
  const {pathname} = useRouter();

  //Tabla verdad para las rutas
  const inicio = pathname === '/';
  const configuraciones = pathname === '/configuraciones';
  const producto = pathname === '/producto';

  return (
    <div className="h-24 max-w-screen-lg m-auto">
      <ul className="flex h-full items-center relative w-1/3 justify-between transition-all">
        <div className={`bg-blue-600 absolute bottom-0 left-0 h-1 w-1/3 transition-all ${inicio ? 'left-0' : producto ? 'left-1/3' : configuraciones ? 'left-2/3' : 'left-0'}`} />
        <li className={`h-full flex w-1/3 ${inicio ? 'text-blue-600' : 'text-black'}`}>
          <Link href="/">
            <p className="h-full justify-center cursor-pointer items-center w-full flex font-medium text-2xl">
              Inicio
            </p>
          </Link>
        </li>
        <li className={`h-full flex w-1/3 ${producto ? 'text-blue-600' : 'text-black'}`}>
          <Link href="/producto">
            <p  className="h-full justify-center cursor-pointer items-center w-full flex font-medium text-2xl">
              Producto
            </p>
          </Link>
        </li>
        <li className={`h-full flex w-1/3 ${configuraciones ? 'text-blue-600' : 'text-black'}`}>
          <Link href="/configuraciones">
            <p  className="h-full justify-center cursor-pointer items-center w-full flex font-medium text-2xl">
              Settings
            </p>
          </Link>
        </li>
      </ul>
    </div>
  )
}