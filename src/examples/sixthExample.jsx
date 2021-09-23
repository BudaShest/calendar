import {useState} from 'react';

const SixthTask = ()=>{
    const [checked] = useState(true);
    const [value] = useState('привет');

    return(
        <div>
            <form className="col s6 push-s3" action="">
                <p>
                    <label>
                        <input type="checkbox" defaultChecked={checked}/>
                        <span>Checked</span>
                    </label>
                </p>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="textarea1" defaultValue={value} className="materialize-textarea validate" />

                    </div>
                </div>
            </form>
        </div>
    );
}

export default SixthTask;