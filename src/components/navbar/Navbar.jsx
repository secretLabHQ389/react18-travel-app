import React, { useState, useTransition } from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Formik, Form } from 'formik'
import {object, string} from 'yup'
import Apartments from '../../images/Apartments.png'
import Hostels from '../../images/Hostels.png'
import Dormatory from '../../images/Dormatory.png'
import "./navbar.scss"
import { setCurrentProperty, selectedPropertySelector } from '../../store/propertySlice'
import Button from '../button/Button'
import { InputField } from '../forms/textInput'
import Modal, {
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "../module/Module"
import { mockedLogIn, loggedInStatusSelector } from '../../store/userSlice'

const roomsList = [
  'Apartments',
  'Hostels',
  'Dormatory'
]

const validationSchema = object().shape({
  username: string()
  .min(11, 'Please use the provided mocked user.')
  .required('Username is required'),
  password: string()
  .min(13, 'Please use the provided mocked password.')
  .matches(/[!@#$%^&*()+`~<>?,./''[{/|\\=^-_-{}]+/,
  'Requires one special character')
  .matches(/[0-9]+/,
  'Requires one number')
  .matches(/[A-Z]+/,
  'Requires one uppercase.')
  .required('Password is required')
})

//@ts-check

const Navbar = () => {
  const [isPending, startTransition] = useTransition()
  const [showModal, setShowModal] = useState(false)
  const mockedLoginStatus = useSelector(loggedInStatusSelector)
  const currentSelectedProperty = useSelector(selectedPropertySelector)
  const dispatch = useDispatch()

  const onSubmit = (values, submitProps) => {
    console.log('onSubmit called')
    const { username, password } = values
    submitProps.setSubmitting(true)
    submitProps.resetForm()
    dispatch(mockedLogIn({
      username: username,
      password: password
    }))
    submitProps.setSubmitting(false)
  }
  
  const initialValues = {
    username: 'Mocked User',
    password: 'fancyPassword#1'
  }

  const chooseCategory = (product) => {
    setShowModal(false)
    startTransition(() => {
      dispatch(setCurrentProperty(product))
    })
  }

  const navController = (product) => {
    setShowModal(true)
    mockedLoginStatus.payload === true && dispatch(setCurrentProperty(product.target.innerHTML))
  }

  const bounceOut = () => {
    dispatch(setCurrentProperty('Welcome! Pick a Category to Begin!'))
  }

  return (
    <div className="nav__container">
      {window.location.href === 'http://localhost:3000/legal' 
        ? (<Link to='/'>Home</Link>) 
        : (<Link to='legal'>Legal Disclaimer</Link>)}
      <Link to='/'><Button onClick={() => bounceOut()}>Home</Button></Link>
      {roomsList && roomsList.map(product => {
        return (
          <div key={Math.random()}>
            <Button onClick={(product) => navController(product)}>{product}</Button>

          </div>
        )
      })}
            {mockedLoginStatus.payload === true ? (
              <Modal
                show={showModal}
                setShow={setShowModal}
              >
                <ModalHeader>
                  <h2>{currentSelectedProperty}</h2>
                </ModalHeader>
                <ModalBody>
                  <div style={{ textAlign: "justify" }}>
                    {currentSelectedProperty === 'Apartments' && (
                      <img className={'image-box'} src={Apartments} />
                    )}
                    {currentSelectedProperty === 'Hostels' && (
                      <img className={'image-box'} src={Hostels} />
                    )}
                    {currentSelectedProperty === 'Dormatory' && (
                      <img className={'image-box'} src={Dormatory} />
                    )}
                  </div>
                </ModalBody>
                <ModalFooter>
                  {currentSelectedProperty !== 'Welcome! Pick a Category to Begin!' && <Button onClick={() => chooseCategory(currentSelectedProperty)}>Choose Selection</Button>}
                </ModalFooter>            
              </Modal>
            ) : (            
              <Modal
                show={showModal}
                setShow={setShowModal}
              >
                <ModalHeader>
                  <h2>Login</h2>
                </ModalHeader>
                <ModalBody>

                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                    enableReinitialize={false}
                  >
                    {formik => {

                      const checkErrors = async () => {
                        if (!formik.errors.username
                        && !formik.errors.password){
                          console.log('api called with: ', formik)
                        }
                      }

                      return (
                        <Form>

                          <InputField
                            formik={formik}
                            name='username'
                            type='text'
                            placeholder='Mocked User'
                            label='Visitor'
                            />

                          <InputField
                            formik={formik}
                            name='password'
                            type='text'
                            placeholder='fancyPassword#1'
                            label='Password'
                            />

                          <div onClick={() => checkErrors()}>
                            <Button disabled={!formik.values.password} type='submit'>Login</Button>
                          </div>                  

                          </Form>
                        )
                      }}
                    </Formik>

                </ModalBody>
                <ModalFooter>
                  <Button onClick={() => setShowModal(false)}>Close</Button>
                </ModalFooter>            
              </Modal>
            )}
      {/* {mockedLoginStatus && (<Button onClick={() => handleLogout()}>Logout</Button>)} */}
    </div>
  )
}

export default Navbar
