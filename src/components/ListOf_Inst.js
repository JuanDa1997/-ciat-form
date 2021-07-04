import { Component } from 'react';
import imgDelete from '../../assets/img/delete.png'
import { db } from '../firebase';
import {toast} from 'react-toastify';


const listInstitutes = (props) =>{
    
    const handleDelete = async(id) => {
       if (window.confirm('Are you sure want to delete this dates?')) {
           await db.collection('links').doc(id).delete();
           toast('Partner removed successfuly', {
               type: 'error',
               autoclose:2000,
           })
       }
   };
    return(
        <div className="showDataBase">
            <table class="table table-dark" >
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Partner</th>
                    <th scope="col">Acronym</th>
                    <th scope="col">City</th>
                    <th scope="col">Country</th>
                    <th scope="col">Type</th>
                    <th scope="col">Url</th>
                    <th scope="col">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {props.send.map((link) =>(

                        <tr key={link.id}>
                            <th scope="row">1</th>
                            <td>{link.Institution_headquarter}</td>
                            <td>{link.name}</td>
                            <td>{link.acronym}</td>
                            <td>{link.city}</td>
                            <td>{link.Country}</td>
                            <td>{link.Type}</td>
                            <td className='urls'>{link.theLinks}</td>
                            <td><img src={imgDelete} alt="delete" onClick={() => handleDelete(link.id)} /></td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
    

}

export default listInstitutes;