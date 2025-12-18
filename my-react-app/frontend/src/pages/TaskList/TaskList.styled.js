import styled from 'styled-components';

export const StyledWrapper = styled.div`
    margin: 0 auto;
    padding: 100px;

    width: 100vw;
    height: 100vh;
    overflow: auto;

    background: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.text};
`;

export const StyledContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;

    gap: 5px;

    @media screen and (min-width: 768px) {
        flex-direction: row;
    }

    width: 100%;
`;

