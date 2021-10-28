import {IQueueComponent} from "../../types/types";
import TicketComponent from "../ticketComponent/TicketComponent";
import {StyledQueueComponent} from "../../styles/styles";


const QueueComponent = ({queue}: IQueueComponent) => {

    return (
        <StyledQueueComponent>
            {
                queue.map(ticket => <TicketComponent ticket={ticket}/>)
            }
        </StyledQueueComponent>
    );
}

export default QueueComponent;
