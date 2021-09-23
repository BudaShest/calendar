import {useState,useRef} from 'react';

const FirstTask = ()=>{
    const [texts, changeText] = useState([]);
    let textRef = useRef();

    function handleSubmit(e){
        e.preventDefault();
        changeText([...texts, textRef.current.value])
    }

    return (
        <div>
            <div className="collection">
                {
                    texts.map(item=><p className="collection-item hoverable">{item}</p>)
                }
            </div>
            <form onSubmit={handleSubmit} className="col s12">
                <div className="row">
                    <div className="input-field col s12">
                        <textarea ref={textRef} id="textarea1" className="materialize-textarea"/>
                        <label htmlFor="textarea1">Textarea</label>
                    </div>
                </div>
                <button type="submit" className="btn-floating btn-large waves-effect waves-light red">
                    <i className="material-icons">add</i>
                </button>
            </form>
        </div>
    );
}

export default FirstTask;