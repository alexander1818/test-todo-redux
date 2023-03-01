import React, { FC, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useActions } from '../../hooks/useActions';
import { TTodo } from '../../store/types';

const CreateTaskForm: FC = () => {
  const { createTodoAction } = useActions();
  const [errors, setErrors] = useState<string[]>([]);
  const [taskData, setTaskData] = useState<TTodo>({
    id: '',
    title: '',
    description: '',
    checked: false,
  });

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const field = Object.keys(taskData).filter(
      (field: string) => field !== 'checked' && !taskData[field as keyof TTodo]
    );
    if (field.length) {
      setErrors([...field]);
      return;
    }

    createTodoAction(taskData);
    setTaskData({
      id: '',
      title: '',
      description: '',
      checked: false,
    });
    setErrors([]);
  };

  const handleChangeFields = (e: React.FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    setTaskData({ ...taskData, [name]: value, id: uuidv4() });
  };

  return (
    <div className="createTask">
      <form className="createTask__form" onSubmit={handleSubmitForm}>
        <div className="blockWrapper">
          <label htmlFor="title">Title</label>
          <input
            className={errors.includes('title') ? 'form-input--error' : 'form-input'}
            type="text"
            id="title"
            name="title"
            value={taskData.title}
            onChange={handleChangeFields}
            placeholder="Enter title"
          />
          {errors.includes('title') && <span className="error-massage">This field is empty</span>}
        </div>
        <div className="blockWrapper">
          <label htmlFor="description">Description</label>
          <input
            className={errors.includes('description') ? 'form-input--error' : 'form-input'}
            type="text"
            id="description"
            name="description"
            value={taskData.description}
            onChange={handleChangeFields}
            placeholder="Enter description"
          />
          {errors.includes('description') && (
            <span className="error-massage">This field is empty</span>
          )}
        </div>
        <input type="submit" value="Create" />
      </form>
    </div>
  );
};

export default CreateTaskForm;
