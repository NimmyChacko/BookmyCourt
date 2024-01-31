import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function MainNavbar() {
  const [openBasic, setOpenBasic] = useState(false);
const navigate = useNavigate();

const doLogout=()=>{
    //localStorage.remove('user')
     //localStorage.remove('token')
    localStorage.clear()
    navigate('/')
}

const {user}=useSelector((store)=>store.user)

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
     
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>Brand</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenBasic(!openBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='/home '>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>

          <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='/addNewCourt'>Add New Court</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='/mybookings'>My Bookings</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                  Dropdown
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Action</MDBDropdownItem>
                  <MDBDropdownItem link>Another action</MDBDropdownItem>
                  <MDBDropdownItem link>Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>



            
          </MDBNavbarNav>

          <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
            <MDBBtn color='primary'>Search</MDBBtn>
          </form>

          <div className='d-none d-lg-block'>
            <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link ms-2' role='button'>
                {user.name}
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Action</MDBDropdownItem>
                  <MDBDropdownItem link>Another action</MDBDropdownItem>
                  <MDBDropdownItem onClick={doLogout} link>Logout</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
              </div>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}