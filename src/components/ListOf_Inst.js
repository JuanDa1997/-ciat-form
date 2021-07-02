import { Component } from 'react';
import imgDelete from '../../assets/img/delete.png'
import { db } from '../firebase';
import {toast} from 'react-toastify'

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

            <table className='namesOfDates'>
                <tr>
                    <td>headquarter</td>
                    <td>Name</td>
                    <td>Acronym</td>
                    <td>City</td>
                    <td>Country</td>
                    <td>Type</td>
                    <td>institute</td>
                    <td>Link</td>
                    <td>Remove</td>
                   
                    
                </tr>
            </table>
           
            {props.send.map((link) =>(
                <table className="container" key={link.id}>
                    <tr>
                        <td>{link.buttons}</td>
                        <td>{link.Institution_headquarter}</td>
                        <td>{link.name}</td>
                        <td>{link.acronym}</td>
                        <td>{link.city}</td>
                        <td>{link.Country}</td>
                        <td>{link.Type}</td>
                        <td>{link.theLinks}</td>
                        <td><img src={imgDelete} alt="delete" onClick={() => handleDelete(link.id)} /></td>
                    </tr>
                  
                </table>
            ))}
        </div>
    );
    

}

export default listInstitutes;