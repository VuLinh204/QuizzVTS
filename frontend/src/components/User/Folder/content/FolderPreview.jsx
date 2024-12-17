import React from 'react';
import '../css/FolderPreview.css';

const FolderPreview = ({ folder }) => {
    const { name } = folder;

    return (
        <div className="DashboardListItem" data-testid="dashboard-list-item">
            <div className="FolderPreviewLink">
                <div className="AssemblyCard AssemblyMediumCard" role="link" tabIndex="0">
                    <div className="folder-preview-container">
                        <div className="FolderPreview">
                            <div className="FolderPreview-cardByLineWrapper">
                                <div className="PreviewCardByline">
                                    <div className="UIDelimiter">
                                        <span className="delimiter-line"></span>
                                    </div>
                                </div>
                            </div>
                            <header className="folder-preview-header">
                                <svg 
                                    aria-label="folder" 
                                    className="AssemblyIcon AssemblyIcon--medium" 
                                    role="img"
                                >
                                    <use xlinkHref="#folder"></use>
                                </svg>
                                <span className="FolderPreview-cardHeaderTitle">
                                    <span>{name}</span>
                                </span>
                            </header>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FolderPreview; 