import {
    HashRouter as Router,
    Routes,
    Route,
} from "react-router-dom"

import { Home, Navbar, About, Footer, Get, NotFound, Team } from './components'

const App = () => {

    const users = ["sohrab", 'abolfazl', 'komeil', 'hikari', 'arsha', 'shahriar', 'ali', 'ahmadreza'];

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/get-parch' element={<Get />} />
                <Route path='/about' element={<About />} />
                <Route path='/team' element={<Team users={users} />} />
                <Route path="/team/:user" element={<Team users={users} />}></Route>
                <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App