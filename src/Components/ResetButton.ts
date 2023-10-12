import styled from 'styled-components';

export const ResetButton = styled.button`
    width: 100%;
    text-transform: uppercase;
    background-color: var(--primary-strong-cyan);
    color: var(--neutral-very-dark-cyan);
    font-weight: var(--font-weight);
    font-size: var(--body-copy-font-size);
    transition: 0.1s ease;

    &:hover,
    &:active,
    &:focus {
        color: var(--neutral-white);
        box-shadow: 0 0px 12px rgba(255, 255, 255, 0.3);
    }
`;
