import React from 'react';
import ListItem from '../../components/ListItem';

import * as SC from './TaskList.styled.js';

const TaskList = ({ tasks }) => {
    return (
        <SC.StyledWrapper>
            <SC.StyledContainer>
                {tasks.map((task) => (
                    <ListItem key={task.id} task={task}/>
                ))}
            </SC.StyledContainer>
        </SC.StyledWrapper>
    );
}

export default TaskList;