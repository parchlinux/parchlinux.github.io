import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom"

import { Home, Navbar, About, Footer, Get, NotFound } from './components'

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/get-parch' element={<Get />} />
                <Route path='/about' element={<About />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App