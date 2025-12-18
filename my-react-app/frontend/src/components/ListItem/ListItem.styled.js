import styled from 'styled-components'

export const StyledContainer = styled.li`
    display: flex;
    flex-wrap: nowrap;
    justify-content: stretch;
    align-items: center;

    width: 45%;
    height: 50px;

    border: 1px solid ${({ theme }) => theme.color.border};
    border-radius: 5px;
`;

