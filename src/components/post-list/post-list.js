import { PostListItem } from "../post-list-item/post-list-item"

import "./post-list.css";

export const PostList = ({posts}) => {

    const elements = posts.map((item) => {
        return (
            <li className="list-group-item">
                <PostListItem {...item} />
            </li>
        )
    })
    
    return (
        <ul className="list-group app-list">
            {elements}
        </ul>
    )
}
