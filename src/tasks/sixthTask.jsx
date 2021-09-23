import {useState} from 'react';


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

const SixthTask = ()=>{
    const [isDisabled, changeDisState] = useState(false);

    function handleChange(){
        changeDisState(!isDisabled)
    }

    return(
        <div style={style.col}>
            <input type="input" placeholder="Пропишите" disabled={isDisabled}/>
            <input type="checkbox" checked={isDisabled} onChange={handleChange}/>
        </div>
    );
}

export default SixthTask;