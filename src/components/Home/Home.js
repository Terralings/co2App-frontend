import { useState } from "react";
import { Button } from "@mui/material";
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
    <div>
      <section>
        <form className="co2Form" onSubmit={props.handleCalcSubmit}>
          <div className="field-inline">
            <label for="date">
              {" "}
              <h2 className="date-label">Date</h2>
            </label>
            <input
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

            <h2 className="vehicle-label">Vehicle Type</h2>
            <select
              className="dropdown"
              name={props.newForm.vehTypeInput}
              onChange={(event) =>
                props.setNewForm({
                  ...props.newForm,
                  vehTypeInput: event.target.value,
                })
              }
            >
              <option
                // onSelect={(e) => setNewForm(e.target.value)}
                value="SmallDieselCar"
                selected="selected"
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
          <div className="field-inline">
            <h2 className="distance-label">Trip Distance(km)</h2>
            <input
              className="userDistance"
              value={props.newForm.distance}
              onChange={handleVehChange}
              name="distance"
              type="text"
            />
          </div>
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

          <input
            className="seeCarbonbutton"
            type="submit"
            value="See Your Carbon Footprint"
          />
        </form>
      </section>
    </div>
  );
}

export default Home;
