import React from 'react';
import './style.css';

function Header() {
    return (
        <React.Fragment>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <div >
                        <div>
                            <img src="./images/checkListLogo.png" alt="CheckList" />
                            <h1 className="display-4">My Todo List</h1>
                        </div>
                    </div>

                </div>
            </div>
        </React.Fragment>
    );
}


export default Header;