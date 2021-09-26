import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { LinkContainer} from 'react-router-bootstrap'
import { Navbar,  Nav, Container, NavDropdown,  } from 'react-bootstrap'
import { logout } from '../actions/userActions'
import SearchBox from './SearchBox'
import { Route } from 'react-router-dom'

const Header = () => {
    const dispatch = useDispatch()
  
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
  
    const logoutHandler = () => {
      dispatch(logout())
    }
    

    return (
        <header>
            <Navbar bg='dark' variant='dark' expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>Grey-Light Shop</Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Route render={({ history }) => <SearchBox history={history} />} />
                    <Nav className='ms-auto'>

                    <LinkContainer to="/allproducts">
                    <Nav.Link>
                        All Products
                    </Nav.Link>
                    </LinkContainer>

                  <NavDropdown title="Categories" id="basic-nav-dropdown" >
                        <LinkContainer to='/mobiles'>
                        <NavDropdown.Item>
                        Mobile Phones
                        </NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/computers'>
                        <NavDropdown.Item>
                        Laptops & Computers
                        </NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/electronics'>
                        <NavDropdown.Item>
                        Other Electronics
                        </NavDropdown.Item>
                    </LinkContainer> 
                            </NavDropdown>

                    <LinkContainer to="/cart" >
                        <Nav.Link>
                            <i className='fas fa-shopping-cart'></i> Cart
                        </Nav.Link>
                    </LinkContainer>

                    
                    {userInfo ? (
                        <NavDropdown title={userInfo.name} id='username'>
                            <LinkContainer to='/profile'>
                                <NavDropdown.Item>
                                Profile
                                </NavDropdown.Item>
                            </LinkContainer>
                                <NavDropdown.Item onClick={logoutHandler}>
                                Logout
                                </NavDropdown.Item>
                            </NavDropdown>
                    
                    ) : (
                    <LinkContainer to="/login">
                        <Nav.Link>
                            <i className='fas fa-user'></i> Sign In
                        </Nav.Link>
                    </LinkContainer>
                    )}

                    { userInfo && userInfo.isAdmin && (
                        <NavDropdown title= 'Admin' id='adminmenu'>
                            <LinkContainer to='/admin/userlist'>
                                <NavDropdown.Item>
                                    Users
                                </NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to='/admin/productlist'>
                                <NavDropdown.Item>
                                    Products
                                </NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to='/admin/orderlist'>
                                <NavDropdown.Item>
                                    Orders
                                </NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                    )}  


                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>       
        </header>
    )
}

export default Header
