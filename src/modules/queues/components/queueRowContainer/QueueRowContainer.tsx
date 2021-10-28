import {IQueueRowContainer} from "../../types/types";
import QueueComponent from "../queueComponent/QueueComponent";
import {StyledActionsContainer, StyledQueueRow} from "../../styles/styles";
import {DeleteIcon, EditIcon, ViewIcon} from "../../../../core/icons/Icons";
import Button from "../../../../core/components/button/Button";
import {useContext} from "react";
import {QueuesContext} from "../../container/QueuesLayout";
import {observer} from "mobx-react";


const QueueRowComponent = ({ queue, id, ticket, statusMode }: IQueueRowContainer) => {

    const { store } = useContext(QueuesContext);
    const { viewQueue, setQueueToDelete, createOrEditQueue } = store;

    return (
        <StyledQueueRow>
            <QueueComponent queue={queue}/>
            {
                !statusMode ?
                    <StyledActionsContainer>
                        <Button icon={<EditIcon/>} onCLick={createOrEditQueue(id)} />
                        <Button icon={<ViewIcon/>} onCLick={viewQueue(id)} />
                        <Button icon={<DeleteIcon/>} onCLick={setQueueToDelete(id)}/>
                    </StyledActionsContainer> :
                    <span className={'statusSpan'}>
                        {!ticket ? `Initial state`: `# ${ticket} moves forward`}
                    </span>
            }
        </StyledQueueRow>
    );
}

export default observer(QueueRowComponent);
