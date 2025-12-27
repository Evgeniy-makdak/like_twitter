import "./post-list-item.css"

export const PostListItem = ({label, important = false}) => {

  let classNames = "d-flex justify-content-between app-list-item";
  important && (classNames += ' important')

  return (
    <div className={classNames}>
      <span className="app-list-item-label classNames">{label}</span>
      <div className="d-flex justify-content-center align-items-center">
        <button type="button" className="btn-star btn-sm">
          <i className="fa fa-star"></i>
        </button>
        <button type="button" className="btn-trash btn-sm">
          <i className="fa fa-trash-alt"></i>
        </button>
        <i className="fa fa-heart"></i>
      </div>
    </div>
  );
};
