
import Third from './components/pages/Third'
import First from './components/pages/First'
import Second from './components/pages/Second'

export default function App() {
  return (
   <div>
    <img src="/moblePatterns.png" alt="mobilePatterns" className="flex md:hidden w-full" />
    <img src="/Patterns.png" alt="patterns" className="hidden md:flex w-full" />
    <First/>
    <Second/>
    <Third/>
   </div>
  )
}
