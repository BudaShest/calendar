import {useState} from 'react';

const ThirdExample = ()=>{
    const [value, setValue] = useState('javascript')

    function handleSelect(e){
        setValue(e.target.value);
    }

    return(
        <div>
            <p>Ваш выбор: {value}</p>
            <form className="col s6 z-depth-3" action="">
                <div className="input-field col s12">
                    <select onChange={handleSelect} value={value}>
                        <option value="html">html</option>
                        <option value="css">css</option>
                        <option value="javascript">javascript</option>
                        <option value="php">php</option>
                    </select>
                    <label>Materialize Select</label>
                </div>
            </form>
        </div>
    );
}

export default ThirdExample;