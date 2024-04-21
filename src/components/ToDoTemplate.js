import './ToDoTemplate.scss';

function TodoTemplate({ children }) {
  return (
    <div className="TodoTemplate">
      <div className="app-title">To do list✍🏻</div>
      <div className="content">{children}</div>
    </div>
  );
}

export default TodoTemplate;
