// frontend/src/components/Librarys/Folder/FolderContent.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import CreateForm from './CreateForm';
import FolderPreview from './FolderPreview';
import '../css/FolderContent.css';

// Đảm bảo modal được gắn vào root app
Modal.setAppElement('#root');

const FolderContent = () => {
    const navigate = useNavigate();
    const [folders, setFolders] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState('Đã tạo');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCreateClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleCreateFolder = (newFolder) => {
        setFolders([...folders, newFolder]);
        setIsModalOpen(false);
    };

    const filters = [
        { id: 'created', label: 'Đã tạo' },
        { id: 'marked', label: 'Đã đánh dấu' },
        { id: 'recent', label: 'Gần đây' },
        { id: 'studied', label: 'Đã học' }
    ];

    const handleFilterSelect = (filter) => {
        setSelectedFilter(filter.label);
        setIsDropdownOpen(false);
    };

    const modalStyles = {
        content: {
            top: '38%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            padding: 0,
            border: 'none',
            borderRadius: '20px',
            width: '90%',
            maxWidth: '750px',
            backgroundColor: 'transparent'
        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }
    };

    return (
        <div className="DashboardPage-primaryContents">
            <div className="DashboardPage-main">
                <div className="UIContainer">
                    <div className="ProfilePage-content">
                        <div className="ProfileRecentPage">
                            <div className="ProfileRecentFeed">
                                <div className="select-filter">
                                    <div data-overlay-container="true" className="dropdown-container-folder">
                                        <button
                                            type="button"
                                            aria-haspopup="true"
                                            aria-expanded={isDropdownOpen}
                                            aria-label="Lọc thư mục"
                                            className="select-filter-button"
                                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                        >
                                            <span>{selectedFilter}</span>
                                            <svg
                                                aria-label="dấu mũ chỉ xuống"
                                                className="AssemblyIcon AssemblyIcon--small"
                                                role="img"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                height="24"
                                            >
                                                <path d="M7 10l5 5 5-5z" fill="currentColor" />
                                            </svg>
                                        </button>

                                        {isDropdownOpen && (
                                            <div className="dropdown-menu-folder">
                                                {filters.map((filter) => (
                                                    <button
                                                        key={filter.id}
                                                        className="dropdown-item-folder"
                                                        onClick={() => handleFilterSelect(filter)}
                                                    >
                                                        {filter.label}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
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
                                        <div className="folder-title">
                                            Bạn chưa tạo thư mục nào
                                        </div>
                                        <div className="folder-description">
                                            Tạo một thư mục để sắp xếp các học phần
                                        </div>
                                        <div className="folder-action">
                                            <button
                                                type="button"
                                                className="create-folder-button"
                                                onClick={handleCreateClick}
                                                aria-label="Tạo thư mục"
                                            >
                                                <span>Tạo thư mục</span>
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal
                isOpen={isModalOpen}
                onRequestClose={handleCloseModal}
                style={modalStyles}
                contentLabel="Tạo thư mục mới"
            >
                <CreateForm onSubmit={handleCreateFolder} onClose={handleCloseModal} />
            </Modal>
        </div>
    );
};

export default FolderContent;