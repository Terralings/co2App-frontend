import { useState } from 'react';


function Home(props) {
    const [newForm, setNewForm] = useState({
        pointA: '',
        pointB: '',
        vehTypeInput: '',
        distance: '',
    })

    const handleChange = (event) => {
        setNewForm({
            ...newForm,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.createEntry(newForm) //not sure about this one, need confirmation
    }

    const [showForm, setShowForm] = useState(true)
    // const [showCreateButton, setShowCreateButton] = useState(true)

    function submitAction(){
        setShowForm(false);
        setShowForm(true);
        // setShowCreateButton(true);
    }

    function createAction() {
        setShowForm(true);
        // setShowCreateButton(false);
    }

    return (
        <div>
            <section>
                <h1>Zero Carbon</h1>
                {showForm ?
                    <form className="co2Form" onClick={handleSubmit}>
                        <div className="field-inline">
                            <h2 className='form-label'>Vehicle Type</h2>
                            <select name={newForm.vehTypeInput} onChange={(event)=> setNewForm(event.target.value)}>
                                <option value="SmallDieselCar">Compact Car</option>
                                <option value="MediumDieselCar">Mid/Full Size Sedan</option>
                                <option value="LargeDieselCar">Truck/SUV</option>
                                <option value="MediumHybridCar">Hybrid Car</option>
                                <option value="LargeHybridCar">Hybrid SUV</option>

                            </select>
                        </div>
                        <div className="field-inline">
                            <h2 className='form-label'>Trip Distance(km)</h2>
                            <input
                                value={newForm.distance}
                                onChange={handleChange}
                                name="distance"
                                type="text"
                            />
                        </div>
                        <div className="field-inline">
                            <h2 className='form-label'>Start Point</h2>
                            <input
                                value={newForm.pointA}
                                onChange={handleChange}
                                name="pointA"
                                type="text"
                                placeholder='(ex. 123 Main St...)'
                            />
                        </div>
                        <div className='field-inline'>
                            <h2 className='form-label'>End Point</h2>
                            <input
                                value={newForm.pointB}
                                onChange={handleChange}
                                name="pointB"
                                type="text"
                                placeholder='(ex. 321 South Main Rd...)'
                            />
                        </div>
                        <button className='create' onClick={() => submitAction()}>Submit</button>
                    </form>
                :null}

            </section>
        </div>
    );
}

export default Home;