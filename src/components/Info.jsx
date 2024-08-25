const Info = () => {
  return (
    <div className='mt-36'>
      <h1 className='text-4xl text-white mb-12 text-center font-semibold py-8' id='cards'>¿Por qué participar?</h1>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mx-[5%] md:mx-[15%] place-content-center'>
        <p className='p-4 bg-black bg-opacity-20 hover:bg-opacity-35 hover:scale-105 duration-200 text-white text-xl rounded-xl shadow-md hover:shadow-orange-800'>
          <span className='text-orange-300'>Acceso a Talento Calificado:</span> Todos los participantes seran
          seleccionados de acuerdo a las necesidades de las empresas
          participantes, garantizando que encontrarás candidatos con el
          perfil que buscas.
        </p>
        <p className='p-4 bg-black bg-opacity-20 hover:bg-opacity-35 hover:scale-105 duration-200 text-white text-xl rounded-xl shadow-md hover:shadow-orange-800'>
          <span className='text-orange-300'>Visibilidad y Publicidad:</span> Incrementa la presencia de tu marca a
          través de medios de comunicación, redes sociales, y durante el
          evento mismo, donde podrás interactuar directamente con los
          asistentes.
        </p>
        <p className='p-4 bg-black bg-opacity-20 hover:bg-opacity-35 hover:scale-105 duration-200 text-white text-xl rounded-xl shadow-md hover:shadow-orange-800'>
          <span className='text-orange-300'>Oportunidad de Networking:</span> Conéctate con otras empresas y descubre
          posibles alianzas estratégicas que puedan beneficiar a tu negocio.
        </p>
      </div>
    </div>
  )
}

export default Info