import { useState } from "react";
import "./post-add-form.css";

export const PostAddForm = ({addPost}) => {
    const [text, setText] = useState('');
    
    const onSubmit = (e) => {
        e.preventDefault();
        
        if (text.trim() === '') {
            alert('Пожалуйста, введите текст');
            return;
        }
        
        addPost(text);
        
        setText('');
    }
    
    // Обработчик изменения текста в инпуте
    const onValueChange = (e) => {
        setText(e.target.value);
    }
    
    return(
        <form 
            className="d-flex bottom-panel" 
            onSubmit={onSubmit}
        >
            <input
                type="text"
                placeholder="Введите запись..."
                className="form-control new-post-label"
                value={text}
                onChange={onValueChange}
            />
            <button
                type="submit"
                className="btn btn-outline-secondary"
            >
                добавить
            </button>
        </form>
    )
}
