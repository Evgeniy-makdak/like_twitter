import "./post-status-filter.css";

export const PostStatusFilter = () => {
    return (
        <div className="btn-group">
            <button type="button" className="btn btn-info">all</button>
            <button type="button" className="btn btn-outline-secondary">like</button>
        </div>
    )
}
