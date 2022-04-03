import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return(
            <div className={s.item}>
                <img src="https://media.istockphoto.com/photos/happy-smiling-man-looking-away-picture-id1158245623?k=20&m=1158245623&s=612x612&w=0&h=rGmn02kNdoQySPEoQmbbDBxOayL4sdW3QWqP9rjgxCg=" alt="" />
                {props.message}
                <div>
                    <span>like</span>
                </div>
            </div>  
    )
};

export default Post;