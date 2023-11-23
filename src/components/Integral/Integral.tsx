import React from 'react';
import { useNavigate } from 'react-router-dom';
import {generateExpression} from "../../helpers/generateIntegral";
import Title from "../common/Title/Title";
import Integrate from "./Integrate";

const Integral = () => {
    const navigate = useNavigate();
    const mainExpression = generateExpression();
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