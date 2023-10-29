import React from "react";
import {Link} from "react-router-dom";
let ViewContact=()=>{

    return(
        <React.Fragment>
           <section className="view-contact-intro ">

            <div className="container">
                <div className="row align-items-center">
                    <div className="col py-3">
                        <p className="h4 text-success" >View Contact</p>
                        <p className="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos excepturi vel blanditiis minima odit placeat quis perspiciatis, voluptatum cumque corrupti provident quaerat culpa, est rerum? Sit rerum totam tempore dolores?</p>
                    </div>
                    
                </div>
            </div>
           </section>

           <section className="view-contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                    <img src="https://assets.stickpng.com/images/585e4bcdcb11b227491c3396.png" alt="" className="contact-img"/>

                     <div className="py-1 m-4">
                     <Link to={'/contacts/list'} className='btn btn-warning'>Close</Link>
                     </div>
                    </div>
                    <div className="col-md-8">
                       <ul className="list-group">
                        <li className="list-group-item list-group-item-action">
                            Name: <span className="fw-bold">Rajan</span>
                        </li>

                        <li className="list-group-item list-group-item-action">
                            Email: <span className="fw-bold">rajan@gmail.com</span>
                        </li>

                        <li className="list-group-item list-group-item-action">
                            Company: <span className="fw-bold">SB Solution Pvt.Ltd</span>
                        </li>

                        <li className="list-group-item list-group-item-action me-2">
                            Title: <span className="fw-bold me-2">React JS developer</span>
                        </li>

                        <li className="list-group-item list-group-item-action">
                            Group: <span className="fw-bold"> Intern</span>
                        </li>
                       </ul>
                    </div>
                </div>
            </div>

            
           </section>
        </React.Fragment>
    );
}

export default ViewContact;