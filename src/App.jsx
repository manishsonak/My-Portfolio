import PageNotFound from "./Components/PageNotFound/PageNotFound"
import Portfolio from "./Components/Portfolio/Portfolio"

import AboutProject from "./Components/Projects/AboutProjects/AboutProject"

import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
function App() {
 

  return (
    <>
      <Router>
        <Routes>
          {/* Portfolio  */}
          <Route path="/" element={<Portfolio/>}/>
          {/* Project Details */}
          <Route path="/detail/:id" element={<AboutProject/>}/>
          {/* Page Not Found */}
          <Route path="*" element={<Portfolio/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
