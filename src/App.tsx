
import Ticker from './components/commons/Ticker'
import FouthPage from './components/pages/FouthPage'
import FullSpecifications from './components/pages/FullSpecifications'
import Hero from './components/pages/Hero'
import MIdPage from './components/pages/MIdPage'
import ReviewPage from './components/pages/ReviewPage'
import SecondPage from './components/pages/SecondPage'
import ThirdPage from './components/pages/ThirdPage'

export default function App() {
  return (
   <>
   <Hero/>
   <SecondPage/>
   <Ticker/>
   <ThirdPage/>
   <MIdPage/>
   <FouthPage/>
   <FullSpecifications/>
   <ReviewPage/>
   </>
  )
}
