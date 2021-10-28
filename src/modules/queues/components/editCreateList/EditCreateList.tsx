import {useContext} from "react";
import {observer} from "mobx-react";
import {DragDropContext, Draggable, Droppable, DropResult} from 'react-beautiful-dnd';
import TicketComponent from "../ticketComponent/TicketComponent";
import {QueuesContext} from "../../container/QueuesLayout";
import Button from "../../../../core/components/button/Button";


const EditCreateList = () => {
    const { store } = useContext(QueuesContext);
    const { queueToEdit, setQueueToEdit, increaseEditQueue, decreaseEditQueue } = store;
    const tickets = queueToEdit?.queue || []

    const reorder = (list: number[], startIndex: number, endIndex: number) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    };

    const onDragEnd = (result: DropResult) =>  {
        if (!result.destination) {
            return;
        }
        const queue = reorder(
            tickets,
            result.source.index,
            result.destination.index
        );

        if (queueToEdit) {
            setQueueToEdit({...queueToEdit, queue})
        }
    }

    const getItemStyle = (isDragging: any, draggableStyle: any) => ({
        userSelect: 'none',
        ...draggableStyle,
    });

    return (
        <div style={{width: '500px', display: "flex", flexDirection: "column", padding: '10px 0', overflow: 'auto'}}>
            <div style={{display: "flex", alignItems: 'center', justifyContent: 'center'}}>
                <Button text={'-'} bgColor={'#C62828'} width={'20px'} onCLick={decreaseEditQueue}/>
                <span style={{margin: '0 10px'}}>{tickets.length}</span>
                <Button text={'+'} bgColor={'#558B2F'} width={'20px'} onCLick={increaseEditQueue}/>
            </div>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable" direction="horizontal">
                    {(provided) => (
                        <div
                            ref={provided.innerRef}
                            style={{
                                display: 'flex',
                                overflow: 'auto',
                                width: '500px'
                            }}
                            {...provided.droppableProps}
                        >
                            {tickets.map((item, index) => (
                                <Draggable key={item} draggableId={`${item}`} index={index}>
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            style={getItemStyle(
                                                snapshot.isDragging,
                                                provided.draggableProps.style
                                            )}
                                        >
                                            <TicketComponent ticket={item}/>
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
}

export default observer(EditCreateList);
