import {useState} from 'react';

const style = {
    row:{
        display:"flex",
        minHeight:"50px",
    },
    col:{
        display: "flex",
        flexDirection:'column',
        minHeight:"50px",
    },
    p:{
        padding:'14px',
        fontSize:'1em',
    },
    option:{
        fontSize:'1em',
    }

}

function getRange(startValue,maxValue){
    let range = [];
    for(let i = startValue; i<=maxValue;i++){
        range.push(i);
    }
    return range;
}

function getWeekDay(year, month, day) {
    let days = ['ВС','ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

    let date = new Date(year, month, day);
    console.log(date.getDay());
    return days[date.getDay()];

}


const SeventhTask = ()=>{
    const [dateData] = useState({
        days: getRange(1,31),
        months: getRange(0,11),
        years: getRange(1,new Date().getFullYear()).reverse(),
    });

    const [currentDate, changeCurrentDate] = useState({
        day:new Date().getUTCDate(),
        month:new Date().getUTCMonth(),
        year:new Date().getUTCFullYear(),
    })




    let day = getWeekDay(currentDate.year, currentDate.month,currentDate.day);
    const [currentDay, getDay] = useState(day);

    function handleChange(e){

        if(e.target.id === "days"){

            changeCurrentDate({...currentDate, day:e.target.value});
        }else if(e.target.id === "months"){

            changeCurrentDate({...currentDate, month:e.target.value});
        }else if(e.target.id === "years") {
            changeCurrentDate({...currentDate, year:e.target.value});
        }

    }

    function handleClick(e){
        getDay(getWeekDay(currentDate.year, currentDate.month,currentDate.day));
    }

    return (
        <div style={style.col}>
            <p onClick={handleClick} style={style.p}>{currentDay}</p>
            <select name="" id="days" onChange={handleChange} defaultValue={currentDate.day}>
                {
                    dateData.days.map((item,index)=> <option key={index} value={item}>{item}</option>)
                }
            </select>
            <select name="" id="months" onChange={handleChange} defaultValue={currentDate.month}>
                {
                    dateData.months.map((item,index)=> <option key={index} value={item}>{item+1}</option>)
                }
            </select>
            <select name="" id="years" onChange={handleChange} defaultValue={currentDate.year}>
                {
                    dateData.years.map((item,index)=> <option key={index} value={item}>{item}</option>)
                }
            </select>
        </div>
    );
}

export default SeventhTask;