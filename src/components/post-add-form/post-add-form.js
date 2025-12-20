import "./post-add-form.css";

export const PostAddForm = () => {
    return(
        <form className="d-flex bottom-panel">
            <input
                type="text"
                placeholder="Введите запись..."
                className="form-control new-post-label"
            />
            <button type="submit" className="btn btn-outline-secondary">
                добавить
            </button>
        </form>
    )
}
