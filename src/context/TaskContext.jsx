import {
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";

import api from "../services/api";

const TaskContext = createContext();

const initialState = {
  tasks: [],
  loading: true,
  error: null,
};

function taskReducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return {
        ...state,
        loading: true,
        error: null,
      };

    case "FETCH_SUCCESS":
      return {
        ...state,
        tasks: action.payload,
        loading: false,
        error: null,
      };

    case "FETCH_ERROR":
      return {
        ...state,
        tasks: [],
        loading: false,
        error: action.payload,
      };

    case "ADD_TASK":
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
      };

    case "UPDATE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? {
                ...task,
                todo: action.payload.todo,
              }
            : task
        ),
      };

    case "TOGGLE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? {
                ...task,
                completed: !task.completed,
              }
            : task
        ),
      };

    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter(
          (task) => task.id !== action.payload
        ),
      };

    default:
      return state;
  }
}

function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(
    taskReducer,
    initialState
  );

  const getTasks = async () => {
    dispatch({
      type: "FETCH_START",
    });

    try {
      const { data } = await api.get("/todos");

      dispatch({
        type: "FETCH_SUCCESS",
        payload: data.todos,
      });
    } catch (error) {
      dispatch({
        type: "FETCH_ERROR",
        payload: "Something went wrong.",
      });
    }
  };

  const addTask = (task) => {
    dispatch({
      type: "ADD_TASK",
      payload: {
        id: Date.now(),
        todo: task.todo,
        completed: false,
        userId: Number(task.userId),
      },
    });
  };

  const updateTask = (id, todo) => {
    dispatch({
      type: "UPDATE_TASK",
      payload: {
        id,
        todo,
      },
    });
  };

  const toggleTask = (id) => {
    dispatch({
      type: "TOGGLE_TASK",
      payload: id,
    });
  };

  const deleteTask = (id) => {
    dispatch({
      type: "DELETE_TASK",
      payload: id,
    });
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        loading: state.loading,
        error: state.error,
        refetch: getTasks,
        addTask,
        updateTask,
        toggleTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  return useContext(TaskContext);
}

export default TaskProvider;