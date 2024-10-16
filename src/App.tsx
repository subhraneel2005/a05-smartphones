
import Ticker from './components/commons/Ticker'
import FourthPage from './components/pages/FourthPageLArgeScreen'
import FouthPage from './components/pages/FouthPage'
import FullSpecifications from './components/pages/FullSpecifications'
import Hero from './components/pages/Hero'
import MDThird from './components/pages/MDThird'
import MIdPage from './components/pages/MIdPage'
import ReviewPage from './components/pages/ReviewPage'
import SecondPage from './components/pages/SecondPage'

export default function App() {
  return (
   <>
   <Hero/>
   <SecondPage/>
   <Ticker/>
   <MDThird/>
   <MIdPage/>
   <FouthPage/>
   <FourthPage/>
   <FullSpecifications/>
   <ReviewPage/>
   </>
  )
}
