import PhoneInterface from "./phone-interfce"

function App() {

  return (
    <div className="flex flex-col md:flex-row md:items-center md:px-20 lg:px-50 md:gap-50 justify-center w-screen h-full md:h-screen bg-Gray100app gap-10 ">
      <div className="absolute bg-linear-to-t  from-Purple500 via-Purple600 to-Purple600 h-[50%] md:h-[120%] md:w-[35%] w-[50%] top-0 left-0 rounded-br-full md:-left-35 md:-top-50 md:rounded-full"></div>
      <PhoneInterface />
      <div className="z-10 font-Rubik md:text-left text-center mb-15">
        <h1 className="text-3xl md:text-5xl font-semibold text-Purple950 mb-5">Simple booking</h1>
        <p className="mx-15 md:mx-0 text-Gray300 md:leading-loose">
        Stay in touch with our dog walkers through the chat interface. This makes it easy to 
  discuss arrangements and make bookings. Once the walk has been completed you can rate 
  your walker and book again all through the chat.
        </p>
      </div>
    </div>
  )
}

export default App
