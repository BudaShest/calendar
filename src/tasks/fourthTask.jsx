import {useState, useEffect} from 'react';

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

const FourthTask = ()=>{
    const [textSelector, changeSelector] = useState('#first');

    function handleChange(e){
        changeSelector(e.target.value);
    }

    useEffect(()=>{
        document.querySelectorAll(".text-par").forEach(item=>{
            item.style.display = 'none';
        })
        document.querySelector(textSelector).style.display = 'block';
    },[textSelector])

    return (
        <div>
            <select onChange={handleChange}>
                <option style={style.p} value="#first">Первый абзац</option>
                <option style={style.p} value="#second">Второй абзац</option>
                <option style={style.p} value="#third">Третий абзац</option>
            </select>
            <div style={style.col}>
                <p className="text-par" id="first" style={style.p}>Первый абзац</p>
                <p className="text-par" id="second" style={style.p}>Второй абзац</p>
                <p className="text-par" id="third" style={style.p}>Третий абзац</p>
            </div>
        </div>
    );
}

export default FourthTask;