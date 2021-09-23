import {useState} from 'react';

const FourthExample = ()=>{
    const [langsObj, changeLangsObj] = useState({
        value:0,
        langs: [
            "Язык HTML",
            "Язык СSS",
            "Язык JavaScript",
            "Язык PHP"
        ]
    })

    function handleSelect(e){
        let obj = {...langsObj};
        obj.value = e.target.value;
        changeLangsObj(obj);
    }

    return(
        <div>
            <p>Ваш выбор: {langsObj.langs[langsObj.value]}</p>
            <form className="col s6 z-depth-3" action="">
                <div className="input-field col s12">
                    <select onChange={handleSelect} value={langsObj.value}>
                        {
                            langsObj.langs.map((item,index)=> <option key={index} value={index}>{item}</option>)
                        }
                    </select>
                    <label>Materialize Select</label>
                </div>
            </form>
        </div>
    );
}

export default FourthExample;