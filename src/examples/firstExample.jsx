import {useState} from 'react';

const FirstExample = ()=>{
    const [value, changeValue] = useState("Привет");

    function handleChange(e){
        changeValue(e.target.value)
    }

    return(
        <div>
            <p className="float-text">Текст: {value}</p>
            <form className="col s6 push-s3">
                <div className="row">
                    <div className="input-field col s12">
                        <textarea id="textarea1" onChange={handleChange} value={value} className="materialize-textarea" />
                        <label htmlFor="textarea1">Textarea</label>
                    </div>
                </div>
            </form>
        </div>
    );

}

export default FirstExample;