import {useState} from 'react';

const ThirdTask = ()=>{
    const [isMarked,changeMarkedState] = useState(true)

    function handleChange(){
        changeMarkedState(!isMarked);
    }

    return (
        <form action="">
            <input type="checkbox" checked={isMarked}/>
            <select onChange={handleChange}>
                <option value={true}>Отмечено</option>
                <option value={false}>Не отмечено</option>
            </select>
        </form>
    );
}

export default ThirdTask;