import { PostListItem } from "../post-list-item/post-list-item"

import "./post-list.css";

export const PostList = () => {
    return (
        <ul className="list-group app-list">
            <PostListItem />
            <PostListItem />
            <PostListItem />
        </ul>
    )
}
