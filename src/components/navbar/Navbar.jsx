import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Apartments from '../../images/Apartments.png'
import Hostels from '../../images/Hostels.png'
import Apartstels from '../../images/Apartstels.png'
import "./navbar.scss"

import Button from "../button/Button"
import Modal, {
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "../module/Module"

//requires Redux for the module list:
const roomsList = [
  'Apartments',
  'Hostels',
  'Apartstels'
]

const Navbar = () => {

  const [showModal, setShowModal] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)

  const handleLogin = () => {
    setLoggedIn(true)
  }

  const handleLogout = () => {
    setLoggedIn(false)
  }

  return (
    <div className="nav__container">
      {console.log(window.location.href)}
      {window.location.href === 'http://localhost:3000/legal' 
        ? (<Link to='/'>Home</Link>) 
        : (<Link to='legal'>Legal Disclaimer</Link>)}
      {roomsList && roomsList.map(product => {
        return (
          <div key={Math.random()}>
            <Button onClick={() => setShowModal(true)}>{product}</Button>
            {loggedIn ? (
              <Modal
                show={showModal}
                setShow={setShowModal}
                // hideCloseButton
              >
                <ModalHeader>
                  <h2>{product}</h2>
                </ModalHeader>
                <ModalBody>
                  <div style={{ textAlign: "justify" }}>
                    {product === 'Apartments' && (
                      <img src={Apartments} />
                    )}
                    {product === 'Hostels' && (
                      <img src={Hostels} />
                    )}
                    {product === 'Apartstels' && (
                      <img src={Apartstels} />
                    )}
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button onClick={() => setShowModal(false)}>Choose Selection</Button>
                </ModalFooter>            
              </Modal>
            ) : (            
              <Modal
                show={showModal}
                setShow={setShowModal}
                // hideCloseButton
              >
                <ModalHeader>
                  <h2>Login</h2>
                </ModalHeader>
                <ModalBody>
                  <div style={{ textAlign: "justify" }}>
                    <form>
                      <label>Email</label>
                      <input type="email" />
                      <label>Password</label>
                      <input type="password" />
                      <Button onClick={() => handleLogin()}>Enter</Button>
                    </form>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button onClick={() => setShowModal(false)}>Close</Button>
                </ModalFooter>            
              </Modal>
            )}
          </div>
        )
      })}
      {loggedIn && (<Button onClick={() => handleLogout()}>Logout</Button>)}
    </div>
  )
}

export default Navbar
