import React, { useState } from "react";
import s from "./Ganre.module.scss";

function Ganre() {

  const [selected, setSelected] = useState("label1");


  const handleRadioChange = (event) => {
    setSelected(event.target.value);
  };

  return (
      <div className={s.Ganre}>
        <div className={s.Ganre__inputs}>

          <input
              type="radio"
              name="options"
              id="Any"
              value="label1"
              checked={selected === "label1"}
              onChange={handleRadioChange}
          />
          <label className={s.inputLable} htmlFor="Any">
            Any
          </label>

          <input
              type="radio"
              name="options"
              id="Action"
              value="label2"
              checked={selected === "label2"}
              onChange={handleRadioChange}
          />
          <label className={s.inputLable} htmlFor="Action">
            Action
          </label>

          <input
              type="radio"
              name="options"
              id="Horror"
              value="label3"
              checked={selected === "label3"}
              onChange={handleRadioChange}
          />
          <label className={s.inputLable} htmlFor="Horror">
            Horror
          </label>

          <input
              type="radio"
              name="options"
              id="Drama"
              value="label4"
              checked={selected === "label4"}
              onChange={handleRadioChange}
          />
          <label className={s.inputLable} htmlFor="Drama">
            Drama
          </label>

          <input
              type="radio"
              name="options"
              id="Comedy"
              value="label5"
              checked={selected === "label5"}
              onChange={handleRadioChange}
          />
          <label className={s.inputLable} htmlFor="Comedy">
            Comedy
          </label>
        </div>
        <div className={s.Ganre__labelContainer}>

          <label
              id="Any"
              style={{ display: selected === "label1" ? "block" : "none" }}
          >
            Any<span>(120)</span>
          </label>
          <label
              id="Action"
              style={{ display: selected === "label2" ? "block" : "none" }}
          >
            Action<span>(120)</span>
          </label>
          <label
              id="Horror"
              style={{ display: selected === "label3" ? "block" : "none" }}
          >
            Horror<span>(120)</span>
          </label>
          <label
              id="Drama"
              style={{ display: selected === "label4" ? "block" : "none" }}
          >
            Drama<span>(120)</span>
          </label>
          <label
              id="Comedy"
              style={{ display: selected === "label5" ? "block" : "none" }}
          >
            Comedy<span>(120)</span>
          </label>
        </div>
      </div>
  );
}

export default Ganre;
