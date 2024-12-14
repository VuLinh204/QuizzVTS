import React, { useState } from "react";
import "../css/CreateClassForm.css";

const CreateClassForm = ({ onCreateClass, onClose }) => {
  const [className, setClassName] = useState("");
  const [school, setSchool] = useState(null);

  const handleSubmit = () => {
    onCreateClass({
      className,
      school,
    });
  };

  return (
    <div className="modal-content">
      <button className="modal-close-btn" onClick={onClose}>
        <svg className="close-icon" width="24" height="24" viewBox="0 0 24 24">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        </svg>
      </button>

      <header>
        <h2>
          <div className="title-wrapper">
            <div className="icon-container">
              <svg className="people-icon" width="24" height="24" viewBox="0 0 24 24">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
              </svg>
            </div>
            <div className="title-text">Tạo lớp học miễn phí của bạn</div>
          </div>
        </h2>
      </header>

      <div className="form-content">
        <p className="description">
          Trao cho học sinh quyền truy cập không gián đoạn vào chế độ Học và
          Kiểm tra đối với tất cả nội dung trong lớp của bạn. Hoàn toàn miễn
          phí!
        </p>

        <div className="input-group">
          <input
            type="text"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            placeholder="Lớp học mới của bạn"
            maxLength={255}
          />
        </div>

        <div className="school-selector">
          <input
            type="text"
            placeholder="Tên trường"
            maxLength={255}
          />
        </div>
      </div>

      <div className="modal-footer">
        <button
          className="btn-create"
          onClick={handleSubmit}
          disabled={!className || !school}
        >
          Tạo lớp
        </button>
      </div>
    </div>
  );
};

export default CreateClassForm;
