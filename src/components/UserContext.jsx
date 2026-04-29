import React, { createContext, useContext, useReducer } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  // Initializing state with a default user and a default task.
  // The user has a unique userID, a username, a password, and a loggedIn status.
  // The task has a unique taskID, a title, a description, a priority level, a status, and is associated with the userID of the default user.
  const initialState = {
    users: [{ userID: 0, username: "test", password: "test", loggedIn: false }],
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
  };

  // The userReducer will handle all actions related to user management, such as creating a new user, logging in, and logging out.

  function userReducer(state, action) {
    switch (action.type) {
      case "CREATE_USER":
        // new users will be created with a unique userID, the username and password from the action payload, and loggedIn set to true.
        return { ...state, users: [...state.users, action.payload] };
      case "LOGIN":
        // To log in, we will find the user in the state that matches the username and password from the action payload, and set their loggedIn status to true.
        return {
          ...state,
          users: state.users.map((user) =>
            user.username === action.payload.username &&
            user.password === action.payload.password
              ? //   follow up about this: I do not want to return a user's password
                { ...user, loggedIn: true }
              : alert(
                  "unable to log in, please make sure your username and password are correct",
                ),
          ),
        };
      case "LOGOUT":
        return {
          ...state,
          users: state.users.map((user) =>
            user.loggedIn
              ? { ...user, loggedIn: false }
              : alert("unable to log out, no user is currently logged in"),
          ),
        };
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
