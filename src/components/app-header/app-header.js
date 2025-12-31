import "./app-header.css";

export const AppHeader = ({text, children}) => {
    return (
        <div className="app-header d-flex">
            <h1>{text}</h1>
            <h2>{children}</h2>
        </div>
    )
}
