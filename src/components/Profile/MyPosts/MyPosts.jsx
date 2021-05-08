import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../../utils/validators/validators";
import {ElementCreator} from '../../../common/FormControls/FormControl'

const maxLength10 = maxLength(10);
const Textarea = ElementCreator("textarea");

const NewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name='newPostText' component={Textarea} validate={[required, maxLength10]}
                   placeholder='Enter post message'/>
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
}

const NewPostFormRedux = reduxForm({form: 'newPost'})(NewPostForm);

const MyPosts = React.memo(props => {
    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message}
                                                   likesCount={p.likesCount}/>)

    let addPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <NewPostFormRedux onSubmit={addPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
});

export default MyPosts;