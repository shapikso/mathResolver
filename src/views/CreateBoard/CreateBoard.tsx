import React, {useState} from 'react';
import './CreateBoard.scss';
import Title from "../../components/common/Title/Title";
import {BoardInfo, buttonSize} from "../../components/types/types";
import {Form, Formik} from "formik";
import FormSubmitter from "../../components/FormSubmitter/FormSubmiter";
import GeneralSettings from "../../components/GeneralSettings/GeneralSettings";
import {LocalStorageService} from "../../services/localStorageServices";
import {BoardServices} from "../../services/boardServices";
import useLoading from "../../hooks/useLoading";
import LINKS from "../../constants/links";
import {useNavigate} from "react-router-dom";

const CreateBoard = () => {
    const {isLoading, loadingWhileReq} = useLoading();
    const navigate = useNavigate();
    const localStorage = new LocalStorageService();
    const {uid, firstName, lastName} = localStorage.getUser();
    const initialValues: BoardInfo = {
        createdBy: uid,
        createdByName: `${firstName} ${lastName}`,
        title: '',
        description: '',
        members: [uid],
    };
    const boardService = new BoardServices();
    const [image, setImage] = useState({name: '', url: ''});
    const onSubmit = async(values: BoardInfo) => {
        loadingWhileReq(boardService.addBoard({...values, image: image.url}))
            .then(() => navigate(LINKS.BOARD_LINK));
    };
    return (
        <div className={'createBoard'}>
            <div className={'createBoard__topPart'}>
                <Title>
                    Create board
                </Title>
                <div className={'createBoard__topPart__shortInfoWrapper'}>
                    <p>Boards</p>
                    <p>/</p>
                    <p>Create board</p>
                </div>
            </div>
            <div className={'createBoard__form'}>
                <div className={'createBoard__form__tabs'}>
                    <div className={'createBoard__form__tabs__singleTab'}>
                        Board columns
                    </div>
                    <div className={'createBoard__form__tabs__singleTab'}>
                        Members settings
                    </div>
                    <div className={'createBoard__form__tabs__singleTab createBoard__form__tabs__singleTab--active'}>
                        General settings
                    </div>
                </div>
                <Formik
                    // validationSchema={validationSchema}
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                >
                    {() => (
                        <Form className={'generalSettings'}>
                            <GeneralSettings imageData={image} onSetImgData={setImage}/>
                            <FormSubmitter disabled={isLoading} size={buttonSize.medium}>Create board</FormSubmitter>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default CreateBoard;