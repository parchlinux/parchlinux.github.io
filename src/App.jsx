import {
    HashRouter as Router,
    Routes,
    Route,
} from "react-router-dom"

import { Home, Navbar, About, Footer, Get, NotFound, Team, Privacy } from './components'

const App = () => {

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/get-parch' element={<Get />} />
                <Route path='/about' element={<About />} />
                <Route path='/privacy' element={<Privacy />} />
                <Route path='/team' element={<Team />} />
                <Route path="/team/:user" element={<Team />}></Route>
                <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App