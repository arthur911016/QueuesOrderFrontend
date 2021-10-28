import {useContext} from "react";
import {observer} from "mobx-react";
import {QueuesContext} from "../../container/QueuesLayout";
import {
    StyledMessageContainer,
    StyledQueueStatus,
    TopDataContainer
} from "../../styles/styles";
import QueueRowComponent from "../queueRowContainer/QueueRowContainer";
import Button from "../../../../core/components/button/Button";
import QueueComponent from "../queueComponent/QueueComponent";


const QueueDetailsComponent = () => {

    const { store } = useContext(QueuesContext);
    const { queueStatus, clearQueue, queue } = store;

    return (
        <StyledQueueStatus>
            <TopDataContainer>
                <span>Bribes Details for Queue # {queue?.id}</span>
            </TopDataContainer>
            <div className={'buttonContainer'}>
                <div>
                    <QueueComponent queue={queue?.originalQueue || [] } />
                </div>
                <Button text={'Go back to list'} onCLick={clearQueue} bgColor={'#C62828'}/>
            </div>
            {
                queueStatus.length > 1 ?
                    <>
                        <div style={{height: '70vh', overflow: 'auto', paddingRight: '5px'}}>
                        {
                            queueStatus.map(({queue, ticket}: any) => <QueueRowComponent queue={queue} ticket={ticket} id={0} statusMode/>)
                        }
                        </div>
                        <span>Total bribes: {queueStatus.length - 1} bribes </span>
                    </> :
                    <StyledMessageContainer>
                        <span><b>Congratulations!!!</b> The queue remains in order till the end.</span>
                    </StyledMessageContainer>
            }
        </StyledQueueStatus>
    );
}

export default observer(QueueDetailsComponent);
