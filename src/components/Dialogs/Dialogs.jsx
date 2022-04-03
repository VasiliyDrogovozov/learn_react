import React from 'react';
import { NavLink } from 'react-router-dom';
import DialogsItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';


const Dialogs = () => {
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogsItem name="Vasiliy" id="1" />
                <DialogsItem name="Andrey" id="2" />
                <DialogsItem name="Sveta" id="3" />
                <DialogsItem name="Victor" id="4" />
                <DialogsItem name="Valery" id="5" />
            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="How are you?"/>
                <Message message="Nice to meet you!"/>
            </div>
        </div>    
    )
};

export default Dialogs;