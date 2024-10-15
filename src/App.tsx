
import Ticker from './components/commons/Ticker'
import FouthPage from './components/pages/FouthPage'
import Hero from './components/pages/Hero'
import SecondPage from './components/pages/SecondPage'
import ThirdPage from './components/pages/ThirdPage'

export default function App() {
  return (
   <>
   <Hero/>
   <SecondPage/>
   <Ticker/>
   <ThirdPage/>
   <img src="/frame5.png" alt="frame5" className="w-full md:h-screen h-auto object-cover -z-10"/>
   <FouthPage/>
   </>
  )
}
