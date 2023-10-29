import React from "react";
import {Link} from 'react-router-dom';
let EditContact=()=>{

    return(
        <React.Fragment>
        <section className='add-contact p-3'>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <p className='h4 text-success fw-bold'>Edit Contact</p>
                        <p className='fst-italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quod facere libero, sapiente odio accusantium vitae nemo. Ex quidem animi molestias. Recusandae, obcaecati? Fugiat quia aperiam culpa numquam, rem explicabo.</p>

                    </div>
                </div>
                <div className='row align-items-center'>
                    <div className='col-md-4'>
                        <form>
                            <div className='mb-2'>
                                <input type="text"className='form-control' placeholder='Name'/>
                            </div>
                            <div className='mb-2'>
                                <input type="text"className='form-control' placeholder='Photo URL'/>
                            </div>
                            <div className='mb-2'>
                                <input type="number"className='form-control' placeholder='Mobile'/>
                            </div>
                            <div className='mb-2'>
                                <input type="text"className='form-control' placeholder='Email'/>
                            </div>
                            <div className='mb-2'>
                                <input type="text"className='form-control' placeholder='Company'/>
                            </div>
                            <div className='mb-2'>
                                <input type="text"className='form-control' placeholder='Title'/>
                            </div>
                            <div className='mb-2'>
                                <select className='form-control'>
                                    <option value=" ">Select a Group</option>
                                </select>
                            </div>

                            <div className='mb-2 py-1'>
                                <input type="submit" className='btn btn-success me-2' value='Update'/>
                                 <Link to={'/contacts/list'} className='btn btn-dark'>Close</Link>
                            </div>

                            
                        </form>
                    </div>

                    <div className="col-md-6">
                    <img src="https://assets.stickpng.com/images/585e4bcdcb11b227491c3396.png" alt="" className="contact-img"/>
                    </div>
                </div>
            </div>
        </section>
       </React.Fragment>
    );
}
export default EditContact;