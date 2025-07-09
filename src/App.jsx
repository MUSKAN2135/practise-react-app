import Home from './components/Home'
import ContactUs from './components/ContactUs'
import About from './components/About'
import Resume from './components/resume'
import Counter, { NameForm } from './components/counter'

function App() {
  const homedata = {
    title: "My homepage",
    description: "here is my practise data"
  }
  // const handleFormData = {
  //   First_Name: '',
  //   Last_Name: '',
  //   Email: '',
  //   Password: ''
  // }

  return (
    <>
      <div className='p-5 w-full '>
        <Home {...homedata} />
        {/* <ContactUs onSubmitForm={handleFormData} />
        <About about1="Architects of the online realm sculpt seamless marvels, painting stories in pixels. Experience the extraordinary as technology dances with artistry, inviting all to a realm where innovation speaks and magic unfolds." />
        <Resume
          first="My Resume"
          second="03/2024  Present"
          third="Full Stack Developer"
          fourth="Heapware"
          fifth="I actively contribute to the development and enhancement of web applications. My responsibilities involve implementing innovative features."
        /> */}
        <Counter initialCount={0} />
        {/* <NameForm /> */}
      </div>
    </>
  )
}

export default App

