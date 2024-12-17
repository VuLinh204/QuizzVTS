import React, { useState } from 'react';
import '../css/CreateForm.css';

const CreateForm = ({ onSubmit, onClose }) => {
    const [folderName, setFolderName] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            name: folderName,
        });
        setFolderName('');
    };

    return (
        <div className="modal-content">
            <button className="modal-close-btn" onClick={onClose}>
                <svg className="close-icon" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
            </button>
            <header>
                <h1>Tạo thư mục mới</h1>
            </header>
            <form onSubmit={handleSubmit}>
                <div className="form-content">
                    <div className="input-group">
                        <div className={`floating-label ${isFocused || folderName ? 'active' : ''}`}>
                            <input
                                type="text"
                                id="folderName"
                                value={folderName}
                                onChange={(e) => setFolderName(e.target.value)}
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}
                                placeholder=""
                                required
                            />
                            <label htmlFor="folderName">Tiêu đề</label>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="submit" className="btn-create" disabled={!folderName.trim()}>
                        Tạo thư mục
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateForm;
