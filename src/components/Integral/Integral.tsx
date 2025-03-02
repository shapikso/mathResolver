import React from 'react';
import { useNavigate } from 'react-router-dom';
import {generateExpression} from "../../helpers/generateIntegralEasy";
import Title from "../common/Title/Title";
import Integrate from "./Integrate";

const Integral = () => {
    const navigate = useNavigate();
    const mainExpression = generateExpression();
    console.log(mainExpression);
    return (
        <div className={'board'}>
            <div className={'board__topPart'}>
                <Title>
                    Integral
                </Title>
            </div>
            <Integrate mainExpression={mainExpression}/>
        </div>
    );
};

export default Integral;