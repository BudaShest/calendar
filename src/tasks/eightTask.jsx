import {useState} from 'react';




const Circle = (props)=>{
    const style = {
        padding: "10px",
        margin: "20px",
        display: "inline-block",
        backgroundColor: props.bgColor,
        borderRadius: "50%",
        width: "100px",
        height: "100px"
    }

    return (
        <div style={style}></div>
    );
}

const EightTask = ()=>{
    const [colors] = useState(['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#00FFFF', '#FF00FF']);
    const [isDisplayed, changeDisplayState] = useState("none")
    function handleClick(){
        let newState = isDisplayed==="none"?"flex":"none";
        changeDisplayState(newState);
    }

    return(
        <div>
            <div style={{display:isDisplayed}}>
                {
                    colors.map(item=><Circle bgColor={item}/>)
                }
            </div>
            <button onClick={handleClick}>Show/Hide Circles</button>
        </div>
    );
}


export default EightTask;
