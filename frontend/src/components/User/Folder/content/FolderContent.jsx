// frontend/src/components/Librarys/Folder/FolderContent.jsx
import React from 'react';
import FolderPreview from './FolderPreview';
import '../css/FolderContent.css';

const FolderContent = ({ username }) => {
    const folders = [];

    return (
        <div className="DashboardPage-primaryContents">
            <div className="DashboardPage-main">
                <div className="UIContainer">
                    <div className="ProfilePage-content">
                        <div className="ProfileRecentPage">
                            <div className="ProfileRecentFeed">
                                {folders.length > 0 ? (
                                    <div className="folders-list">
                                        {folders.map((folder, index) => (
                                            <FolderPreview key={index} folder={folder} />
                                        ))}
                                    </div>
                                ) : (
                                    <div className="folder-empty">
                                        <img
                                            alt="Không tìm thấy thư mục nào trong thư viện"
                                            src="https://assets.quizlet.com/_next/static/media/folders_empty.4ec6ab1f.svg"
                                        />
                                        <div className="folder-title" style={{ color: 'white', fontSize: '24px' }}>
                                            {username} [abc] chưa tạo thư mục nào
                                        </div>
                                        <div className="folder-description" style={{ color: 'white' }}>
                                            Các học phần người này tạo sẽ xuất hiện ở đây
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FolderContent;