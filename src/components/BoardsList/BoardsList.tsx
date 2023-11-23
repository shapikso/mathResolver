import React, {useCallback, useEffect, useState} from 'react';
import SingleBoard from "./SingleBoard";
import {LocalStorageService} from "../../services/localStorageServices";
import {SingleBoardTypes} from "../types/types";
import {BoardServices} from "../../services/boardServices";

const localStorage = new LocalStorageService();
const boardsService = new BoardServices();

const BoardsList = () => {
    const {uid} = localStorage.getUser();
    const [boards, setBoards] = useState<SingleBoardTypes[]>([]);

    const memoGetBoards = useCallback(async () => {
        const boards = await boardsService.getBoards(uid);
        setBoards(boards as SingleBoardTypes[]);
    },[]);

    useEffect(() => {
        memoGetBoards();
    },[memoGetBoards]);
    return (
        <div className={'boardList'}>
            {boards.map(({image,title,description,id, createdByName}:SingleBoardTypes) => (
                <SingleBoard createdByName={createdByName} key={id} title={title} description={description} image={image}/>
            ))}
        </div>
    );
};

export default BoardsList;