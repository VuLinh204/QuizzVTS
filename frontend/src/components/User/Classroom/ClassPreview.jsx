import React, { useState } from "react";

const ClassPreview = ({ className, school, membersCount, setsCount }) => {
  return (
    <div className="class-preview">
      <div className="preview-content">
        <div className="preview-header">
          <svg className="icon-people">
            <use xlinkHref="#people" />
          </svg>
          <span className="class-name">{className}</span>
        </div>

        <div className="preview-details">
          <div>{setsCount} học phần</div>
          <span className="divider" />
          <div>{membersCount} thành viên</div>
          <span className="divider" />
          <span className="school-name">{school}</span>
        </div>
      </div>
    </div>
  );
};

export default ClassPreview;
