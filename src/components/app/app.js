import {useState } from "react";
import { AppHeader } from "../app-header/app-header";
import { PostStatusFilter } from "../post-status-filter/post-status-filter";
import { SearchPanel } from "../search-panel/search-panel";
import { PostList } from "../post-list/post-list";
import { PostAddForm } from "../post-add-form/post-add-form";

import "./app.css";

const App = () => {

  const [data, setData] = useState([
    {label: "Learn HTML", important: true, id: "html"},
    {label: "Learn Java Script", important: false, id: "js"},
    {label: "Learn React", important: true, id: "react"}
])

  const deleteItem = (id) => {
    const newData = data.filter(item => item.id !== id);
    setData(newData);
  };

  const totalPosts = data.length;
  const markPosts = 2;

  return (
    <div className="app">
      <AppHeader text="Evgeniy Acteck" >
        {totalPosts} записей. Из них отмечено {markPosts}
      </ AppHeader>
      <div className="d-flex search-panel">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList posts={data} onDelete={deleteItem} />
      <PostAddForm />
    </div>
  );
};

export default App;
