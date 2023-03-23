import React from "react";
import svgMaker from "../../../svgMaker";

import s from "./Mark.module.scss";

const Mark = ({ markNum }) => {
    return (
        <div className={s.mark}>
            <div className={s.mark__bcg}>
                {svgMaker("star", s.icon)}
                <span>{markNum.toFixed(1)}</span>
            </div>
        </div>
    );
};

export default Mark;
