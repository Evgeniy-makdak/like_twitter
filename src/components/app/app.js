import { AppHeader } from "../app-header/app-header";
import { PostStatusFilter } from "../post-status-filter/post-status-filter";
import { SearchPanel } from "../search-panel/search-panel";
import { PostList } from "../post-list/post-list";
import { PostAddForm } from "../post-add-form/post-add-form";

import "./app.css";

const App = () => {

  const data = [
    {label: "Learn HTML", important: true},
    {label: "Learn Java Script", important: false},
    {label: "Learn React", important: true}
]

  return (
    <div className="app">
      <AppHeader />
      <div className="d-flex search-panel">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList posts={data} />
      <PostAddForm />
    </div>
  );
};

export default App;
