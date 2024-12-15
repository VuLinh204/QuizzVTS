import styled from 'styled-components';

// Footer Component
// Represents the footer section of the application.

export default function Footer() {
    return (
        // StyledFooter styled-component
        <StyledFooter className="footer">
            {/* Copyright information */}
            <p>&copy; {new Date().getFullYear()} QuizzVTS, All rights reserved.</p>
            <p>Designed with by DEV2025 VTS</p>
        </StyledFooter>
    );
}

// StyledFooter styled-component with CSS styles
const StyledFooter = styled.footer`
    background-color: #0a092d;
    padding: 1.5rem 1.5rem;
    color: white;
    z-index: 1000;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;

    // Media query for responsiveness
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }

    // Dark mode styling
    body.dark-mode & {
        background-color: rgba(0, 0, 0, 0.7);
    }
`;
