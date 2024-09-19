import React from 'react';
import { Link } from 'react-router-dom';

const links = [
    {
        name:"Home",
        href:"/home"
    },
    {
        name:"Login",
        href:"/login"
    },
    {
        name:"Registro",
        href:"/registro"
    },
    {
        name:"Terminos",
        href:"/terminos"
    },
    {
        name:"Devoluciones",
        href:"/devoluciones"
    },
    {
        name:"Cart",
        href:"/Cart"
    }    
       
]

const NavBar = () => {
    return ( 
    
        <div>
            {links.map((x) =>(
                <Link to={x.href}>{x.name}</Link>
            ))}
        </div>
    )
};


export default NavBar;