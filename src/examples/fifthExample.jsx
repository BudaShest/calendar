import {useState} from 'react';

const FifthTask = ()=>{
    const [option,changeOption] = useState('option1');

    function handleRadioChange(e){
        changeOption(e.target.value);
    }

    return(
        <div>
            <p>Ваш выбор: {option}</p>
            <form className="col s6 push-s3" action="">
                <p>
                    <label>
                        <input className="with-gap" name="lang" type="radio" value="option1" checked={option === 'option1'} onChange={handleRadioChange}/>
                        <span>Green</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input className="with-gap"  name="lang" type="radio" value="option2" checked={option === 'option2'} onChange={handleRadioChange}/>
                        <span>Green</span>
                    </label>
                </p>
            </form>
        </div>
    );
}

export default FifthTask;