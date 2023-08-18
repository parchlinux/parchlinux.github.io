import {
    HashRouter as Router,
    Routes,
    Route,
} from "react-router-dom"


import { useRef } from 'react'
import { Fireworks } from '@fireworks-js/react'

import { Home, Navbar, About, Footer, Get, NotFound, Team, Privacy } from './components'

const App = () => {

    const ref = useRef(true)

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

            <Fireworks
                ref={ref}
                options={{ opacity: 0.5 }}
                style={{
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    position: 'fixed',
                    background: 'transparent'
                }}
            />

        </Router>
    )
}

export default App