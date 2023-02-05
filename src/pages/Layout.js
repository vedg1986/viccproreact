import {Outlet, Link} from 'react-router-dom'


function Layout () {
    

    return(
        <div className='navbar'>
     <nav>
        <span className='Logo'>STARK STORE</span>
         
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="Storage">Storage</Link>
                </li>
                <li>
                    <Link to="Store">Store</Link>
                </li>
            </ul>
            </nav>
           
        
        <hr />
        <Outlet />
     </div>
    )
}
export default Layout;