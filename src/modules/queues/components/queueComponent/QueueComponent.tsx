import {IQueueComponent} from "../../types/types";
import TicketComponent from "../ticketComponent/TicketComponent";
import {FlexDiv} from "../../../../core/styles/styles";


const QueueComponent = ({queue}: IQueueComponent) => {

    return (
        <FlexDiv>
            {
                queue.map(ticket => <TicketComponent ticket={ticket}/>)
            }
        </FlexDiv>
    );
}

export default QueueComponent;
