import React, { createContext, useContext, useReducer } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // Initializing state with a default user and a default task.
  // The user has a unique userID, a username, a password, and a loggedIn status.
  // The task has a unique taskID, a title, a description, a priority level, a status, and is associated with the userID of the default user.
  const initialState = {
    users: [{ userID: 0, username: "test", password: "test" }],
    tasks: [
      {
        taskID: 0,
        title: "Create a Task!",
        description: "Create a task to get started!",
        priority: "High",
        status: "New",
        userID: 0,
      },
    ],
    currentUser: { loggedIn: false },
  };
  const [state, dispatch] = useReducer(userReducer, initialState);

  // The userReducer will handle all actions related to user management, such as creating a new user, logging in, and logging out.

  function userReducer(state, action) {
    switch (action.type) {
      case "CREATE_USER":
        // new users will be created with a unique userID, the username and password from the action payload, and loggedIn set to true.
        if (
          state.users.find((user) => user.username === action.payload.username)
        ) {
          alert("Username already exists. Please choose a different username.");
          return false;
        } else {
          state.currentUser = {
            username: action.payload.username,
            loggedIn: true,
          };
          return { ...state, users: [...state.users, action.payload] };
        }
      case "LOGIN": {
        const authenticatedUser = state.users.find(
          (user) =>
            user.username === action.payload.username &&
            user.password === action.payload._password,
        )
          ? action.payload
          : false;
        if (authenticatedUser) {
          return {
            ...state,
            currentUser: {
              username: authenticatedUser.username,
              loggedIn: true,
            },
          };
        }
        return {
          ...state,
          currentUser: { loggedIn: false },
        };
      }
      case "LOGOUT":
        if (state.currentUser.loggedIn) {
          return {
            ...state,
            currentUser: {
              username: "",
              loggedIn: false,
            },
          };
        } else {
          return state;
        }
      case "CREATE_TASK":
        // new tasks will be created with a unique taskID, the title, description, priority, and status from the action payload,
        // and associated with the userID of the currently logged in user.
        return { ...state, tasks: [...state.tasks, action.payload] };
      //case "EDIT_TASK":
      case "DELETE_TASK":
        // To delete a task, we will filter out the task from the state that matches the taskID from the action payload.
        return {
          ...state,
          tasks: state.tasks.filter((task) => task.taskID !== action.payload),
        };
      default:
        return state;
    }
  }

  return (
    <UserContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
