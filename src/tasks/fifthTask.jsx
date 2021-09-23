import {useState, useRef} from 'react';

const style = {
    row:{
        display:"flex",
    },
    col:{
        display: "flex",
        flexDirection:'column'
    },
    p:{
        padding:'14px',
        fontSize:'1em',
    },
    option:{
        fontSize:'1em',
    }

}

const FifthTask = ()=>{
    const [optionList, addOption] = useState([
        "first",
        "second",
        "third",
        "fourth"
    ]);

    let inputRef = useRef();
    
    function handleChange(e){
        let newOption = inputRef.current.value;
        addOption([...optionList, newOption]);
    }

    return(
        <div style={style.col}>
            <select>
                {
                    optionList.map((item,index)=> <option key={index} value="item">{item}</option>)
                }
            </select>
            <div style={style.col}>
                <input ref={inputRef} type="text"/>
                <button onClick={handleChange}>Add</button>
            </div>
        </div>
    );
}

export default FifthTask;