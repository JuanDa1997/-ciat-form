import {Link} from 'react-router-dom';
const Navigation =()=>{

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
           <div className="container">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav ml-auto" >
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>

                            </li>
                            <li className="nav-item">
                                <Link to="/lista" className="nav-link" >Institutes requested</Link>
                            </li>
                        </ul>
                    </div>

                </div>
           </div>
        </nav>
       
    );
}

export default Navigation;