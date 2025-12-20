import "./post-list-item.css"

export const PostListItem = () => {
  return (
    <li className="d-flex justify-content-between app-list-item">
      <span className="app-list-item-label">first task</span>
      <div className="d-flex justify-content-center align-items-center">
        <button type="button" className="btn-star btn-sm">
          <i className="fa fa-star"></i>
        </button>
        <button type="button" className="btn-trash btn-sm">
          <i className="fa fa-trash-alt"></i>
        </button>
        <i className="fa fa-heart"></i>
      </div>
    </li>
  );
};
