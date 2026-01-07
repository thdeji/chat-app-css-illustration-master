import PhoneInterface from "./phone-interfce"

function App() {

  return (
    <div className="flex flex-col justify-center w-screen h-full bg-Gray100app gap-10 ">
      <div className="absolute bg-linear-to-t from-Purple500 via-purple-600 to-Purple300 h-[50%] w-[50%] top-0 left-0 rounded-br-full"></div>
      <PhoneInterface />
      <div className="z-10 font-Rubik text-center mb-15">
        <h1 className="text-3xl font-semibold text-Purple950 mb-5">Simple booking</h1>
        <p className="mx-15 text-Gray300">
        Stay in touch with our dog walkers through the chat interface. This makes it easy to 
  discuss arrangements and make bookings. Once the walk has been completed you can rate 
  your walker and book again all through the chat.
        </p>
      </div>
    </div>
  )
}

export default App
