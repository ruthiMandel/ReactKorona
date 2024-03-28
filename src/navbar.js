import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #00203B;
    padding: 20px 40px;
    width:94%;
`;

const Logo = styled.div`
    img {
        max-height: 50px;
    }
`;

const NavLinks = styled.ul`
    list-style-type: none;
    display: flex;
    align-items: center;
    margin-left: auto;
`;

const NavLinkItem = styled.li`
    margin-left: 20px;
    &:first-child {
        margin-left: 0;
    }
`;

const NavLink = styled(Link)`
    text-decoration: none;
    color: #ff0000;
    font-weight: bold;
    &:hover {
        color: #ffd6e0;
    }
`;

const NavIcon = styled.span`
    margin-left: 20px;
`;

const NavBar = () => {
    let dispatch=useDispatch();
    return (    <StyledNav>
            <Link to="./home">
            <Logo>
             
                <h1 style={{ color: '#ff0000', fontFamily: 'cursive', fontSize: '2.5rem', marginBottom: '20px' }}>KORONA</h1>
            </Logo>
            </Link>
            <NavLinks>
            <NavLinkItem>
                    <NavLink to="client">client</NavLink>
                </NavLinkItem>
                <NavLinkItem>
                    <NavLink to="AddClient"><FaUser />+</NavLink>
                </NavLinkItem>
  
            </NavLinks>
 

        </StyledNav>
        
    );
}

export default NavBar;