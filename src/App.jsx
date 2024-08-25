import 'animate.css';
import Info from './components/Info';

const LandingPage = () => {
  return (
    <>
      <video autoPlay muted loop className='myVideo'>
        <source src='bg-sunset.mp4' type='video/mp4' />
      </video>
      <div className='flex justify-center mx-[20px]'>
      <div className='h-[100vh] max-w-[1200px]'>
        <div className='flex justify-center flex-col place-items-center'>
          <div className='mt-16'>
            <img src='/expo-logo-2.png' alt='404 NOT FOUND' />
          </div>
          <div className='text-white text-center bg-black bg-opacity-35 p-10 rounded-lg mt-4'>
            <h1 className='mx-[5%] text-xl md:text-2xl lg:text-3xl font-bold'>
              TE INVITAMOS A FORMAR PARTE DE ESTE EVENTO, DONDE REUNIREMOS A
              JÓVENES DE TAFÍ VIEJO, LISTOS PARA INICIAR SU CARRERA PROFESIONAL.
            </h1>
            <p className='mx-1 md:mx-[20] text-xl mt-12 font-semibold'>
              En la Expo Empresas "Construyendo Futuro", tendrás la oportunidad
              de conocer a jóvenes deseosos de incorporarse al mundo laboral y
              contribuir al crecimiento de tu empresa.
            </p>
            {/* <p className='mx-1 md:mx-[20] text-xl mt-6'>Expo de Empresas "Construyendo Futuro" es una inversión en el futuro de Tafí Viejo. Es un lugar donde se construyen carreras, se forjan conexiones valiosas y se sientan las bases para un desarrollo sostenible que beneficiará tanto a las personas como a las empresas durante muchos años.</p> */}
          </div>
          <div className='text-white p-2 rounded-lg bg-black bg-opacity-35 mt-4 w-full'>
            <div className='flex-col flex md:flex-row '>
              <div className='basis-1/3 flex place-items-center justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                </svg>
                <p className='text-xl font-semibold '>1 de noviembre </p>
              </div>
              <div className='basis-1/3 flex place-items-center justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                <p className='text-xl font-semibold'>Hosteria
                  Atahualpa Yupanqui</p>
              </div>
              <div className='basis-1/3 flex place-items-center justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <p className='text-xl font-semibold'>9 : 00 hr - 18: 00 hr</p>
              </div>
            </div>
          </div>
          <a href="#cards">
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='size-14 text-white mt-[120px] animate__pulse animate__animated animate__infinite bg-emerald-800 bg-opacity-35 p-2 rounded-full shadow-md hover:shadow-emerald-900 hover:bg-emerald-900 duration-300'
            >
              <path
                fillRule='evenodd'
                d='M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z'
                clipRule='evenodd'
              />
            </svg>
          </a>
        </div>
        <Info />
        <div className='mt-44 grid grid-cols-1 lg:grid-cols-3 gap-4'>
          <div>
            <img src="expo-logo.png" alt="empresaLogo" />
          </div>
          <div>
            <img src="expo-logo.png" alt="empresaLogo" />
          </div>
          <div>
            <img src="expo-logo.png" alt="empresaLogo" />
          </div>
        </div>

        <footer className='text-white text-center p-2 bg-black mt-auto mt-3'>
          leandro, como estas? CONTESTAME HIJO DE bien amigo
        </footer>
      </div>
      </div>
    </>
  );
};

export default LandingPage;
