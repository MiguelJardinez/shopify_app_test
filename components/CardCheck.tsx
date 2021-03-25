import React from 'react'

export default function CardCheck(props: any) {
  return (
    <>
      <div className="mb-16">
        <div className="flex">
          <h2 className="font-bold text-3xl mr-5">Billy Jhon</h2>
          <h3 className="font-bold text-3xl">#12340</h3>
        </div>
        <p className="text-gray-400 my-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet justo sit amet lectus viverra 
          auctor vehicula id risus. Nam ac lacus sed arcu vulputate pharetra a id ante. Maecenas at sapien 
          vitae nisi bibendum viverra a nec ligula. Maecenas iaculis rutrum nulla, quis laoreet sem aliquet 
          ut. Vestibulum at porttitor tortor, id aliquet turpis. Donec volutpat augue felis, vel posuere 
          lacus rutrum quis. Nunc id rutrum velit. Vestibulum ante ipsum primis in faucibus orci luctus 
          et ultrices posuere cubilia curae; Phasellus egestas placerat rutrum. Pellentesque habitant 
          morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        </p>
        <button className="uppercase mt-5 px-14 py-4 mr-8 border-blue-600 text-blue-600 focus:outline-none border rounded-full">Rechazar</button>
        <button className="uppercase mt-5 px-14 py-4 mr-8 bg-blue-600 text-white border focus:outline-none rounded-full">Aceptar</button>
      </div>
    </>
  )
}
