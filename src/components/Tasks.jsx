import { ChevronRightIcon, TrashIcon } from "lucide-react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClicked, onDeleteTaskClicked }) {
  const navigate = useNavigate();

  function onSeeDetailsClicked(task) {
    const query = new URLSearchParams();
    query.set("titulo", task.title);
    query.set("descricao", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul
      className={`space-y-4 p-6 bg-slate-200 rounded-md shadow ${
        tasks.length === 0 && "hidden"
      }`}
    >
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClicked(task.id)}
            className={`bg-slate-400 text-left w-full text-white p-2 rouded-md ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.title}
            {/* {task.isCompleted ? "Completed" : "Pending"} */}
          </button>
          <Button onClick={() => onSeeDetailsClicked(task)}>
            <ChevronRightIcon />
          </Button>

          <Button onClick={() => onDeleteTaskClicked(task.id)}>
            <TrashIcon />
          </Button>
        </li>
      ))}
    </ul>
  );
}

Tasks.propTypes = {
  tasks: PropTypes.array, // obrigatória
};

export default Tasks;
