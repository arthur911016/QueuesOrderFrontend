import {useContext} from "react";
import {
    StyledCreateButtonContainer,
    StyledMessageContainer,
    StyledQueueContainer,
    TopDataContainer
} from "../../styles/styles";
import QueueRowContainer from "../queueRowContainer/QueueRowContainer";
import {QueuesContext} from "../../container/QueuesLayout";
import {observer} from "mobx-react";
import Button from "../../../../core/components/button/Button";

const QueuesListComponent = () => {
    const { store } = useContext(QueuesContext);
    const { queues, createOrEditQueue, listPlaceholder } = store;
    return (
            <StyledQueueContainer>
                <TopDataContainer>
                    <span>New Year queues list</span>
                </TopDataContainer>
                <StyledCreateButtonContainer>
                    <Button text={'Create New Queue'} onCLick={createOrEditQueue()} bgColor={'#558B2F'}/>
                </StyledCreateButtonContainer>
                {
                    listPlaceholder ?
                        <StyledMessageContainer>
                            <span>{ listPlaceholder }</span>
                        </StyledMessageContainer>
                        : queues.map((queue) => <QueueRowContainer {...queue}/>)
                }
            </StyledQueueContainer>

    );
}

export default observer(QueuesListComponent);
