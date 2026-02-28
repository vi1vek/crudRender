
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Signup from './Pages/Signup'
import Signin from './Pages/Signin'
import VerifyOtp from './Pages/VerifyOtp'
const App = () => {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/signin' element={<Signin />}/>
        <Route path='/verify' element={<VerifyOtp />}/>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
