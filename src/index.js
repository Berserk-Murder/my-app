import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Sobre from './Sobre'
import Contato from './Contato'
import Main from './Main'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const listaTarefas = [
  { id: 1, nome_tarefa: 'Number 1' },
  { id: 2, nome_tarefa: 'Number 2' },
  { id: 3, nome_tarefa: 'Number 3' },
  { id: 4, nome_tarefa: 'Number 4' },
]

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Main lista={listaTarefas}/>
      },
      {
        path: '/sobre',
        element: <Sobre />
      },
      {
        path: '/home',
        element: <Main nome={(listaTarefas)} />
      },
      {
        path: '/contato',
        element: <Contato />
      }
    ]
  }
]
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);