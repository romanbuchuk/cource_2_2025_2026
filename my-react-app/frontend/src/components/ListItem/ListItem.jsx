import React from 'react';

import * as SC from './ListItem.styled.js';

const ListItem = ({ task }) => {
    return (
        <SC.StyledContainer>{task.title}</SC.StyledContainer>
    )
}

export default ListItem;
