import {useEffect,useState} from 'react'
import Forms from './components/Forms';
import List from './components/listOf_Inst';
import '../css/App.css';
import {db} from './firebase';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {

  const [links, setLinks] = useState([]);

  const addOrEditLink = async(linkObject) =>{

    try{
      await db.collection('links').doc().set(linkObject); //add to firebase
      console.log('new task added');
      toast('New partner added', {
        type:'success',
        autoclose:2000,
      })
    }catch(error){
      console.log(error)
    }
    
   
  }
  console.log(links)

  const getLinks = () => {
    db.collection('links').onSnapshot((querySnapShot) =>{
     const docs = [];
      querySnapShot.forEach((doc) => {
        docs.push({...doc.data(), id:doc.id});
      });
      setLinks(docs);
    }); 
  };

  useEffect(() =>{
    getLinks();
  },[]);

    console.log(links);
  return (
    <div className="App">
      <Forms addOrEditLink={addOrEditLink}/>
      <List send={links}/>
      <ToastContainer />
    </div>
  );
}

export default App;