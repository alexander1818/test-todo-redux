import CreateTaskForm from './components/createTaskForm/CreateTaskForm';
import Modal from './components/modal/Modal';
import TaskList from './components/taskList/TaskList';
import './styles/_index.scss';

export const App = () => {
  return (
    <div>
      <CreateTaskForm />
      <TaskList />
      <Modal />
    </div>
  );
};

export default App;
