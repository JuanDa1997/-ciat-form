import {useEffect,useState} from 'react'
import Forms from './components/Forms';
import NavBar from './components/Navigation';
import Errors from './components/Errors';
import List from './components/listOf_Inst';
import '../css/App.css';
import {db} from './firebase';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

const App = () => {

  const [links, setLinks] = useState([]);

  const addOrEditLink = async(linkObject) =>{

    try{
      await db.collection('links').doc().set(linkObject); //add to firebase
      console.log('new task added');
      // window.location.replace('http://localhost:3002/lista');
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
    <Router>
        <div className="App">
      <NavBar />
        <Switch>
          <Route exact path='/' component={Forms}>

            <Forms addOrEditLink={addOrEditLink}/>
          </Route>

          <Route exact path='/lista'  component={List}>
            <List send={links}/>
          </Route>

          <Route path="*">
            <Errors />
          </Route>
        </Switch>  
      <ToastContainer />
    </div>
 
    </Router>
  
 );
}

export default App;