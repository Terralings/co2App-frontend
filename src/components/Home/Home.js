import "./Home.css";

function Home(props) {
  //   const [newForm, setNewForm] = useState({
  //     // pointA: "",
  //     // pointB: "",
  //     vehTypeInput: "",
  //     distance: "",
  //   });

  //   const handleChange = (event) => {
  //     setNewForm({
  //       ...newForm,
  //       [event.target.name]: event.target.value,
  //     });
  //   };

  const handleDistChange = (event) => {
    props.setDistInput(event.target.value);
  };
  const handleVehChange = (event) => {
    // props.setVehTypeInput(event.target.value);
    props.setNewForm({
      ...props.newForm,
      [event.target.name]: event.target.value,
    });
  };

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     props.createEntry(newForm); //not sure about this one, need confirmation
  //   };

  return (
    <div className="home-container">
      <form className="co2Form" onSubmit={props.handleCalcSubmit}>
        <div className="input-container">
          <div className="date-container">
            <label for="date">
              {" "}
              <h2 className="date-label">Date</h2>
            </label>
            <input
              required
              className="dateMenu"
              type="date"
              name="date"
              value={props.newForm.date}
              onChange={(event) =>
                props.setNewForm({
                  ...props.newForm,
                  date: event.target.value,
                })
              }
            />
          </div>
          <div className="vehicle-container">
            <h2 className="vehicle-label">Vehicle Type</h2>
            <select
              className="vehicle-dropdown"
              name={props.newForm.vehTypeInput}
              onChange={(event) =>
                props.setNewForm({
                  ...props.newForm,
                  vehTypeInput: event.target.value,
                })
              }
              required
            >
              <option value="none" selected disabled hidden>
                Select an Option
              </option>
              <option
                // onSelect={(e) => setNewForm(e.target.value)}
                value="SmallDieselCar"
              >
                Compact Car
              </option>
              <option
                // onSelect={(e) => handleVehChange(e.target.value)}
                value="MediumDieselCar"
              >
                Mid/Full Size Sedan
              </option>
              <option
                // onSelect={(e) => handleVehChange(e.target.value)}
                value="LargeDieselCar"
              >
                Truck/SUV
              </option>
              <option
                // onSelect={(e) => handleVehChange(e.target.value)}
                value="MediumHybridCar"
              >
                Hybrid Car
              </option>
              <option
                // onSelect={(e) => handleVehChange(e.target.value)}
                value="LargeHybridCar"
              >
                Hybrid SUV
              </option>
            </select>
          </div>
          <div className="distance-container">
            <h2 className="distance-label">Trip Distance(mi)</h2>
            <input
              required
              className="userDistance"
              value={props.newForm.distance}
              placeholder="example: 5"
              onChange={handleVehChange}
              name="distance"
              type="text"
            />
          </div>
        </div>

        {/* Start/End Address Input Code */}
        {/* <div className="field-inline">
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
          </div> */}
        <div className="co2btn-container">
          <input
            className="seeCarbonbutton"
            type="submit"
            value="See Carbon Footprint"
          />
        </div>
      </form>
    </div>
  );
}

export default Home;
