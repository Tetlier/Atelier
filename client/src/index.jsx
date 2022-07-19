import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';

const root = createRoot(document.getElementById('root'));

let sessionCookie = {
  's_id': document.cookie.slice(5),
  actions: []
};

// takes in id (question or answer) and action (helpful or reported) to add to cookie
const addToCookie = function(id, action) {
  action = action.toLowerCase();
  // adds id number + h or r for helpful or reported
  sessionCookie.actions.push(id + action.slice(0, 1));
};

root.render(<App sessionCookie={sessionCookie} addToCookie={addToCookie}/>);