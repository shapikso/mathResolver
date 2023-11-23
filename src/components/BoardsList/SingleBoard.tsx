import React from 'react';
import {ReactComponent as Leave} from "../../assets/leaveOut.svg";
import {ReactComponent as Edit} from "../../assets/edit.svg";
import defaultPhoto from '../../assets/defaultImage.png';
import './BoardsList.scss';
import Button from "../common/Button/Button";
import {BoardInfo, buttonColor, buttonSize} from "../types/types";

const SingleBoard = ({image, title, description, createdByName}: BoardInfo) => {
    return (
        <div className={'singleBoard'}>
            <div className={'singleBoard__infoWrapper'}>
                <div className={'singleBoard__infoWrapper__imagePart'}>
                    <img src={image ? image : defaultPhoto} alt="hello"/>
                </div>
                <div className={'singleBoard__infoWrapper__infoPart'}>
                    <div className={'singleBoard__infoWrapper__infoPart__title'}>{title}</div>
                    <div className={'singleBoard__infoWrapper__infoPart__description'}>
                        {description}
                    </div>
                    <div className={'singleBoard__infoWrapper__infoPart__createdBy'}>
                        Board created by {createdByName}
                    </div>
                </div>
            </div>
            <div className={'singleBoard__buttonWrapper'}>
                <Button color={buttonColor.transparentError} size={buttonSize.header}><Leave/> Leave board</Button>
                <div className={'singleBoard__buttonWrapper__line'}></div>
                <Button color={buttonColor.transparentPrimary} size={buttonSize.header}><Edit/> Edit board</Button>
            </div>
        </div>
    );
};

export default SingleBoard;