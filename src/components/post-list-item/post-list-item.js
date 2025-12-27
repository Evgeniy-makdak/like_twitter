import { useState } from "react";
import "./post-list-item.css";

export const PostListItem = ({
  label: initialLabel = " ",
  important: initialImportant = false,
}) => {
  const [like, setLike] = useState(false);
  const [important, setImportant] = useState(initialImportant);
  const [label, setLabel] = useState(initialLabel);

  let classNames = "d-flex justify-content-between app-list-item";
  important && (classNames += " important");
  like && (classNames += " like");

  const onImportant = () => {
    setImportant(!important);
  };

  const onLike = () => {
    setLike(!like);
  };

  return (
    <div className={classNames}>
      <span className="app-list-item-label" onClick={onLike}>
        {label}
      </span>
      <div className="d-flex justify-content-center align-items-center">
        <button type="button" className="btn-star btn-sm" onClick={onImportant}>
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
