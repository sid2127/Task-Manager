import TaskCard from "./TaskCard";
import EmptyState from "./EmptyState";
import {
  DragDropContext,
  Droppable,
  Draggable
} from "@hello-pangea/dnd";

const TaskList = ({
  tasks,
  fetchTasks,
  handleDragEnd
}) => {

  if (!tasks.length) {
    return <EmptyState />;
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="tasks">

        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="grid gap-4"
          >

            {tasks.map((task, index) => (

              <Draggable
                key={task._id}
                draggableId={task._id}
                index={index}
              >

                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <TaskCard
                      task={task}
                      fetchTasks={fetchTasks}
                    />
                  </div>
                )}

              </Draggable>

            ))}

            {provided.placeholder}

          </div>
        )}

      </Droppable>
    </DragDropContext>
  );
};

export default TaskList;