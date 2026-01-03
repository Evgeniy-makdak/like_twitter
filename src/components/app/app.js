import {useState } from "react";
import { AppHeader } from "../app-header/app-header";
import { PostStatusFilter } from "../post-status-filter/post-status-filter";
import { SearchPanel } from "../search-panel/search-panel";
import { PostList } from "../post-list/post-list";
import { PostAddForm } from "../post-add-form/post-add-form";

import "./app.css";

const App = () => {

  const [data, setData] = useState([
    {label: "Learn HTML", important: false, id: "html"},
    {label: "Learn Java Script", important: false, id: "js"},
    {label: "Learn React", important: false, id: "react"}
])

  const deleteItem = (id) => {
    const newData = data.filter(item => item.id !== id);
    setData(newData);
  };

  const addPost = () => {
  const newPost = {
    label: "Learn TypeScript",
    important: false,
    id: `${Date.now()}`
  };
  const newData = [...data, newPost];
  setData(newData);
}

  const toggleImportant = (id) => {
    const newData = data.map(item => {
      if (item.id === id) {
        return {...item, important: !item.important};
      }
      return item;
    });
    setData(newData);
  };

  const totalPosts = data.length;
  const markPosts = data.filter(item => item.important).length;

  return (
    <div className="app">
      <AppHeader text="Evgeniy Acteck" >
        {totalPosts} записей. Из них важных {markPosts}
      </ AppHeader>
      <div className="d-flex search-panel">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList posts={data} onDelete={deleteItem} onToggleImportant={toggleImportant} />
      <PostAddForm addPost={addPost} />
    </div>
  );
};

export default App;
