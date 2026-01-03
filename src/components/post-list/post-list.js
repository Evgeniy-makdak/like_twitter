import { PostListItem } from "../post-list-item/post-list-item"

import "./post-list.css";

export const PostList = ({posts, onDelete, onToggleImportant}) => {

    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className="list-group-item">
                <PostListItem 
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleImportant={() => onToggleImportant(id)} />
            </li>
        )
    })
    
    return (
        <ul className="list-group app-list">
            {elements}
        </ul>
    )
}
