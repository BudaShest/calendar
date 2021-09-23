import {useState} from 'react';

const SecondExample = ()=>{
    const [checked, changeCheckedState] = useState(true);

    function handleChecking(e){
        changeCheckedState(!checked);
    }

    return(
        <div>
            <p>Состояние {checked? "выбран":"не выбран"}</p>
            <form action="">
                <p>
                    <label>
                        <input type="checkbox" checked={checked} onChange={handleChecking}/>
                        <span>Red</span>
                    </label>
                </p>
            </form>
        </div>
    );
}

export default SecondExample;