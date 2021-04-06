import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";
import {connect} from "react-redux";

/*const MyPostsContainer = (props) => {

    return <StoreContext.Consumer>
        {store => {
                let state = store.getState().profilePage;

                let onAddPost = () => {
                    let action = addPostCreator();
                    store.dispatch(action);
                }

                let onPostChange = (text) => {
                    let action = updateNewPostTextCreator(text);
                    store.dispatch(action);
                }

                return <MyPosts posts={state.posts}
                                newPostText={state.newPostText}
                                addPost={onAddPost}
                                updateNewPostText={onPostChange}/>
            }
        }
    </StoreContext.Consumer>
}*/

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            let action = addPostCreator();
            dispatch(action);
        },
        updateNewPostText: (text) => {
            let action = updateNewPostTextCreator(text);
            dispatch(action);
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;








