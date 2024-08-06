import Portfolio from "./Components/Portfolio/Portfolio"

import AboutProject from "./Components/Projects/AboutProjects/AboutProject"

import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
function App() {
 

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Portfolio/>}/>
          <Route path="/detail/:id" element={<AboutProject/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
