import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/explore" element={<Explore />} />
        <Route path="/post" element={<PostSkill />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App