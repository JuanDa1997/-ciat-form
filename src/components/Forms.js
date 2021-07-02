import { useState } from 'react';
import {toast} from 'react-toastify'
const Forms = (props) => {
    

    const initialStateValues = {
        name:'',
        acronym:'',
        city:'',
        bool:'',
        theLinks:'',
        
        
    };
    
    const [values, setValues] = useState(initialStateValues);

    const handleInputChange = (e) => {
        const words = e.target.value;
        if (e.target.id === "name") {
            const maxWords = words.trim().split(/\s+/).length;
            if (maxWords>2) {
                
                toast('It must be less than 10 words!', {
                    type: 'warning',
                    autoclose:1000,
                })
            }
           
        }

        if (e.target.id === "acronym") {
            const maxWords = words.trim().length;
           
            if (maxWords>=10) {
                
                toast('It must be less than 10 characters!', {
                    type: 'warning',
                    autoclose:1000,
                })
            }
        }
       
        const{name, value} = e.target;
        setValues({...values,[name]: value})
        // console.log(e.target)
    }

    const validateUrl = (str) => {
        return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(str);

    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!validateUrl(values.theLinks)){
            return toast('Invalid URL', {
                type: 'warning',
                autoclose:1000,
            });
        }
        props.addOrEditLink(values);
        setValues({...initialStateValues});
    }

    const handleButton =(e)=>{
        console.log(e.target);
        if (e.target) {
            
            const{name,value} = e.target;
            console.log(`${value}`);
            setValues({...values,[name]:value})

            if (value === "no") {
                const ghost = document.getElementById('firstSelect').style="display:none"
                // const defaultElement = document.getElementById('default');
                // const{name,value} = defaultElement;
                // setValues({...values,[name]:value})
                // console.log(value)
                // const defaultElement = document.getElementById('default');
                // const{name,value} = defaultElement;
                // setValues({...values,[name]:value})
                    
            }          
        }
    }
   

    // const select1 = document.getElementById('selector1');
    // const select2 = document.getElementById('selector2');
    // const select3 = document.getElementById('selector3');

    //Busca en el domElemente el elemento select y lo guarda
    // en la base de datos

    let theFunction =(e)=>{
        // console.log(e.target)
        if (e.target) {
            e.target.addEventListener("change",(e)=>{
                const{name,value} = e.target;
                console.log(`${value}`);
                setValues({...values,[name]:value})
                
            });
        }
    }

  
  
    
    // if (select2) {
    //     select2.addEventListener('change',(e)=>{
    //         const{name,value} = e.target;
    //         console.log(`${value}`);
    //         setValues({...values,[name]:value})
            
    //     });
    // }

    // if (select3) {
    //     select3.addEventListener('change',(e)=>{
    //         const{name,value} = e.target;
    //         console.log(`${value}`);
    //         setValues({...values,[name]:value})
            
    //     });
    // }

    
   

    return(

        <div className="App">

            <div class="section_userDates">
                <label htmlFor="linstitute">Is this institution a branch? </label>
                <div className="button_institution"  >
                    <button type="button" value="yes" name="buttons" onClick={handleButton}>Yes</button>
                    <button type="button" value="no" name="buttons" onClick={handleButton}>No</button>
                </div>

                <form id="firstSelect">
                    <label htmlFor="fname">Select institute headquarter: <label htmlFor="*" style={{color: "red"}} >*</label></label>
                    <select className="SelectInstitute" id="selector3" name="Institution_headquarter" onClick={theFunction}>
                        <option value="value1" selected hidden>Select an option...</option>
                        <option value="Headquarter" id="default">headquarters</option>
                        <option value="Branch">Branch</option>
                        <option value="Regional office">Regional office</option>
                    </select>
                </form>
    
                <form className='eventInput pure-form'>
                    <fieldset>
                        <label htmlFor="lname">Name: <label htmlFor="*" style={{color: "red"}} >*</label></label>
                        <input name='name' type='text' id='name' onChange={handleInputChange} value={values.name}/>
                        <label htmlFor="lacronym" >Acronym: <label htmlFor="*" style={{color: "red"}} >*</label></label>
                        <input name='acronym' type='text' maxlength="10" id='acronym' onChange={handleInputChange} value={values.acronym}/>
                        <label htmlFor="lcity">City: <label htmlFor="*" style={{color: "red"}} >*</label></label>
                        <input name='city' type='text'  onChange={handleInputChange} value={values.city}/>
                    </fieldset>
                </form>
            
                <form >
                    <label htmlFor="fname">Country: <label htmlFor="*" style={{color: "red"}} >*</label></label>
                    <select className="SelectInstitute" id="selector1" name="Country" onClick={theFunction}>
                        <option value="value1" selected hidden>Select an option...</option>
                        <option value="AF">Afganistán</option>
                        <option value="AL">Albania</option>
                        <option value="DE">Alemania</option>
                        <option value="AD">Andorra</option>
                        <option value="AO">Angola</option>
                        <option value="AI">Anguilla</option>
                        <option value="AQ">Antártida</option>
                        <option value="AG">Antigua y Barbuda</option>
                        <option value="AN">Antillas Holandesas</option>
                        <option value="SA">Arabia Saudí</option>
                        <option value="DZ">Argelia</option>
                        <option value="AR">Argentina</option>
                        <option value="AM">Armenia</option>
                        <option value="AW">Aruba</option>
                        <option value="AU">Australia</option>
                        <option value="AT">Austria</option>
                        <option value="AZ">Azerbaiyán</option>
                        <option value="BS">Bahamas</option>
                        <option value="BH">Bahrein</option>
                        <option value="BD">Bangladesh</option>
                        <option value="BB">Barbados</option>
                        <option value="BE">Bélgica</option>
                        <option value="BZ">Belice</option>
                        <option value="BJ">Benin</option>
                        <option value="BM">Bermudas</option>
                        <option value="BY">Bielorrusia</option>
                        <option value="MM">Birmania</option>
                        <option value="BO">Bolivia</option>
                        <option value="BA">Bosnia y Herzegovina</option>
                        <option value="BW">Botswana</option>
                        <option value="BR">Brasil</option>
                        <option value="BN">Brunei</option>
                        <option value="BG">Bulgaria</option>
                        <option value="BF">Burkina Faso</option>
                        <option value="BI">Burundi</option>
                        <option value="BT">Bután</option>
                        <option value="CV">Cabo Verde</option>
                        <option value="KH">Camboya</option>
                        <option value="CM">Camerún</option>
                        <option value="CA">Canadá</option>
                        <option value="TD">Chad</option>
                        <option value="CL">Chile</option>
                        <option value="CN">China</option>
                        <option value="CY">Chipre</option>
                        <option value="VA">Ciudad del Vaticano (Santa Sede)</option>
                        <option value="CO">Colombia</option>
                        <option value="KM">Comores</option>
                        <option value="CG">Congo</option>
                        <option value="CD">Congo, República Democrática del</option>
                        <option value="KR">Corea</option>
                        <option value="KP">Corea del Norte</option>
                        <option value="CI">Costa de Marfíl</option>
                        <option value="CR">Costa Rica</option>
                        <option value="HR">Croacia (Hrvatska)</option>
                        <option value="CU">Cuba</option>
                        <option value="DK">Dinamarca</option>
                        <option value="DJ">Djibouti</option>
                        <option value="DM">Dominica</option>
                        <option value="EC">Ecuador</option>
                        <option value="EG">Egipto</option>
                        <option value="SV">El Salvador</option>
                        <option value="AE">Emiratos Árabes Unidos</option>
                        <option value="ER">Eritrea</option>
                        <option value="SI">Eslovenia</option>
                        <option value="ES">España</option>
                        <option value="US">Estados Unidos</option>
                        <option value="EE">Estonia</option>
                        <option value="ET">Etiopía</option>
                        <option value="FJ">Fiji</option>
                        <option value="PH">Filipinas</option>
                        <option value="FI">Finlandia</option>
                        <option value="FR">Francia</option>
                        <option value="GA">Gabón</option>
                        <option value="GM">Gambia</option>
                        <option value="GE">Georgia</option>
                        <option value="GH">Ghana</option>
                        <option value="GI">Gibraltar</option>
                        <option value="GD">Granada</option>
                        <option value="GR">Grecia</option>
                        <option value="GL">Groenlandia</option>
                        <option value="GP">Guadalupe</option>
                        <option value="GU">Guam</option>
                        <option value="GT">Guatemala</option>
                        <option value="GY">Guayana</option>
                        <option value="GF">Guayana Francesa</option>
                        <option value="GN">Guinea</option>
                        <option value="GQ">Guinea Ecuatorial</option>
                        <option value="GW">Guinea-Bissau</option>
                        <option value="HT">Haití</option>
                        <option value="HN">Honduras</option>
                        <option value="HU">Hungría</option>
                        <option value="IN">India</option>
                        <option value="ID">Indonesia</option>
                        <option value="IQ">Irak</option>
                        <option value="IR">Irán</option>
                        <option value="IE">Irlanda</option>
                        <option value="BV">Isla Bouvet</option>
                        <option value="CX">Isla de Christmas</option>
                        <option value="IS">Islandia</option>
                        <option value="KY">Islas Caimán</option>
                        <option value="CK">Islas Cook</option>
                        <option value="CC">Islas de Cocos o Keeling</option>
                        <option value="FO">Islas Faroe</option>
                        <option value="HM">Islas Heard y McDonald</option>
                        <option value="FK">Islas Malvinas</option>
                        <option value="MP">Islas Marianas del Norte</option>
                        <option value="MH">Islas Marshall</option>
                        <option value="UM">Islas menores de Estados Unidos</option>
                        <option value="PW">Islas Palau</option>
                        <option value="SB">Islas Salomón</option>
                        <option value="SJ">Islas Svalbard y Jan Mayen</option>
                        <option value="TK">Islas Tokelau</option>
                        <option value="TC">Islas Turks y Caicos</option>
                        <option value="VI">Islas Vírgenes (EEUU)</option>
                        <option value="VG">Islas Vírgenes (Reino Unido)</option>
                        <option value="WF">Islas Wallis y Futuna</option>
                        <option value="IL">Israel</option>
                        <option value="IT">Italia</option>
                        <option value="JM">Jamaica</option>
                        <option value="JP">Japón</option>
                        <option value="JO">Jordania</option>
                        <option value="KZ">Kazajistán</option>
                        <option value="KE">Kenia</option>
                        <option value="KG">Kirguizistán</option>
                        <option value="KI">Kiribati</option>
                        <option value="KW">Kuwait</option>
                        <option value="LA">Laos</option>
                        <option value="LS">Lesotho</option>
                        <option value="LV">Letonia</option>
                        <option value="LB">Líbano</option>
                        <option value="LR">Liberia</option>
                        <option value="LY">Libia</option>
                        <option value="LI">Liechtenstein</option>
                        <option value="LT">Lituania</option>
                        <option value="LU">Luxemburgo</option>
                        <option value="MK">Macedonia, Ex-República Yugoslava de</option>
                        <option value="MG">Madagascar</option>
                        <option value="MY">Malasia</option>
                        <option value="MW">Malawi</option>
                        <option value="MV">Maldivas</option>
                        <option value="ML">Malí</option>
                        <option value="MT">Malta</option>
                        <option value="MA">Marruecos</option>
                        <option value="MQ">Martinica</option>
                        <option value="MU">Mauricio</option>
                        <option value="MR">Mauritania</option>
                        <option value="YT">Mayotte</option>
                        <option value="MX">México</option>
                        <option value="FM">Micronesia</option>
                        <option value="MD">Moldavia</option>
                        <option value="MC">Mónaco</option>
                        <option value="MN">Mongolia</option>
                        <option value="MS">Montserrat</option>
                        <option value="MZ">Mozambique</option>
                        <option value="NA">Namibia</option>
                        <option value="NR">Nauru</option>
                        <option value="NP">Nepal</option>
                        <option value="NI">Nicaragua</option>
                        <option value="NE">Níger</option>
                        <option value="NG">Nigeria</option>
                        <option value="NU">Niue</option>
                        <option value="NF">Norfolk</option>
                        <option value="NO">Noruega</option>
                        <option value="NC">Nueva Caledonia</option>
                        <option value="NZ">Nueva Zelanda</option>
                        <option value="OM">Omán</option>
                        <option value="NL">Países Bajos</option>
                        <option value="PA">Panamá</option>
                        <option value="PG">Papúa Nueva Guinea</option>
                        <option value="PK">Paquistán</option>
                        <option value="PY">Paraguay</option>
                        <option value="PE">Perú</option>
                        <option value="PN">Pitcairn</option>
                        <option value="PF">Polinesia Francesa</option>
                        <option value="PL">Polonia</option>
                        <option value="PT">Portugal</option>
                        <option value="PR">Puerto Rico</option>
                        <option value="QA">Qatar</option>
                        <option value="UK">Reino Unido</option>
                        <option value="CF">República Centroafricana</option>
                        <option value="CZ">República Checa</option>
                        <option value="ZA">República de Sudáfrica</option>
                        <option value="DO">República Dominicana</option>
                        <option value="SK">República Eslovaca</option>
                        <option value="RE">Reunión</option>
                        <option value="RW">Ruanda</option>
                        <option value="RO">Rumania</option>
                        <option value="RU">Rusia</option>
                        <option value="EH">Sahara Occidental</option>
                        <option value="KN">Saint Kitts y Nevis</option>
                        <option value="WS">Samoa</option>
                        <option value="AS">Samoa Americana</option>
                        <option value="SM">San Marino</option>
                        <option value="VC">San Vicente y Granadinas</option>
                        <option value="SH">Santa Helena</option>
                        <option value="LC">Santa Lucía</option>
                        <option value="ST">Santo Tomé y Príncipe</option>
                        <option value="SN">Senegal</option>
                        <option value="SC">Seychelles</option>
                        <option value="SL">Sierra Leona</option>
                        <option value="SG">Singapur</option>
                        <option value="SY">Siria</option>
                        <option value="SO">Somalia</option>
                        <option value="LK">Sri Lanka</option>
                        <option value="PM">St Pierre y Miquelon</option>
                        <option value="SZ">Suazilandia</option>
                        <option value="SD">Sudán</option>
                        <option value="SE">Suecia</option>
                        <option value="CH">Suiza</option>
                        <option value="SR">Surinam</option>
                        <option value="TH">Tailandia</option>
                        <option value="TW">Taiwán</option>
                        <option value="TZ">Tanzania</option>
                        <option value="TJ">Tayikistán</option>
                        <option value="TF">Territorios franceses del Sur</option>
                        <option value="TP">Timor Oriental</option>
                        <option value="TG">Togo</option>
                        <option value="TO">Tonga</option>
                        <option value="TT">Trinidad y Tobago</option>
                        <option value="TN">Túnez</option>
                        <option value="TM">Turkmenistán</option>
                        <option value="TR">Turquía</option>
                        <option value="TV">Tuvalu</option>
                        <option value="UA">Ucrania</option>
                        <option value="UG">Uganda</option>
                        <option value="UY">Uruguay</option>
                        <option value="UZ">Uzbekistán</option>
                        <option value="VU">Vanuatu</option>
                        <option value="VE">Venezuela</option>
                        <option value="VN">Vietnam</option>
                        <option value="YE">Yemen</option>
                        <option value="YU">Yugoslavia</option>
                        <option value="ZM">Zambia</option>
                        <option value="ZW">Zimbabue</option>
                    </select>
                </form>
            
                <form >
                    <label htmlFor="fname">Type: <label htmlFor="*" style={{color: "red"}} >*</label></label>
                    <select className="SelectInstitute" id='selector2' name="Type" onClick={theFunction}>
                        <option value="value1" selected hidden>Select an option...</option>
                        <option value="Academic Institutions">Academic Institutions</option>
                        <option value="Donor">Donor</option>
                        <option value="Non-Governmental Organization">Non-Governmental Organization</option>
                        <option value="Research Institution">Research Institution</option>
                    </select>
                </form>
            
               
                <form className='eventInput'>
                    <fieldset>
                        <label htmlFor="lthelink">If you know the partner website please paste the link below:</label>
                        <input name='theLinks' type='text'  placeholder="http://" onChange={handleInputChange} value={values.theLinks}/>
                    </fieldset>
                </form>
            
                
                <div className="button_sendForms">
                    <button type="button" onClick={handleSubmit}>Request add new partner</button>
                </div>
            
            </div>
    
        </div>

    );
    
    
}

export default Forms;