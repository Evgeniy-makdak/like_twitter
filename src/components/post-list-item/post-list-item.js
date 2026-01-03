import { useState } from "react";
import "./post-list-item.css";

export const PostListItem = ({
  label: initialLabel = " ",
  important: initialImportant = false,
  onDelete,
  onToggleImportant,
}) => {
  const [like, setLike] = useState(false);
  const [label] = useState(initialLabel);

  let classNames = "d-flex justify-content-between app-list-item";
  initialImportant && (classNames += " important");
  like && (classNames += " like");

  const onLike = () => {
    setLike(!like);
  };

  return (
    <div className={classNames}>
      <span className="app-list-item-label" onClick={onLike}>
        {label}
      </span>
      <div className="d-flex justify-content-center align-items-center">
        <button type="button" className="btn-star btn-sm" onClick={onToggleImportant}>
          <i className="fa fa-star"></i>
        </button>
        <button type="button" 
        className="btn-trash btn-sm"
        onClick={onDelete}
        >
          <i className="fa fa-trash-alt"></i>
        </button>
        <i className="fa fa-heart"></i>
      </div>
    </div>
  );
};
