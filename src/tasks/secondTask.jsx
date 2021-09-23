import {useState,useRef} from 'react';

const SecondTask = ()=>{
    let pRef = useRef();

    function handleChange(e){
        pRef.current.style.backgroundColor = e.target.value;
    }

    return (
        <div>
            <p ref={pRef}>Text</p>
            <form action="">
                <div className="input-field col s12">
                    <select onChange={handleChange}>
                        <option value="red">Красный</option>
                        <option value="green">Зелёный</option>
                        <option value="blue">Голубой</option>
                        <option value="white">Белый</option>
                    </select>
                    <label>Materialize Select</label>
                </div>
            </form>
        </div>
    );
}

export default SecondTask;