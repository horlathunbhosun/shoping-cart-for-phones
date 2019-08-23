import React from 'react';
import './bootstrap/bootstrap-grid.css';
import './bootstrap/bootstrap-reboot.css';
import './bootstrap/bootstrap.css';
// import './bootstrap/bootstrap.bundle.min.js';
// import './bootstrap/bootstrap.js';

const HomePage = () =>{
    return(
       <div className="jumbotron text-center">
            <div className="container">
            <h1 class="jumbotron-heading">Shopping Cart Phones</h1>
             <p class="lead text-muted">
                 This is a react application for shopping phones built with firebase and stripe app
             </p>
            <p>
                {/* <button  class="btn btn-primary my-2">Login </button>

                <button class="btn btn-secondary my-2">Sign up</button> */}
            </p>

            </div>
       </div>

       
    )
}

export default HomePage;