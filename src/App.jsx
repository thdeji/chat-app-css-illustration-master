import PhoneInterface from "./phone-interfce"

function App() {

  return (
    <div className="flex flex-col justify-center w-screen h-screen bg-Gray100app-background">
      <div className="absolute bg-Pink500 h-[50%] w-[50%] top-0 left-0 rounded-br-full"></div>
      <PhoneInterface />
      <div className="z-10">
        <h1>Simple booking</h1>
        <p>
        Stay in touch with our dog walkers through the chat interface. This makes it easy to 
  discuss arrangements and make bookings. Once the walk has been completed you can rate 
  your walker and book again all through the chat.
        </p>
      </div>
    </div>
  )
}

export default App
