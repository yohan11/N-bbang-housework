import "./css/TodoWorkBox.css";

const TodoWorkBox = () => {
  return (
    <div className="TodoWorkBox">
      <img src="/img/todoWork1_icon.png" />
      <div className="todo_text ml2">
        <div className="boldTxt ftSm">설거지</div>
        <div className="grayText ftXsm">오늘 오후 9시까지</div>
      </div>
    </div>
  );
};

export default TodoWorkBox;
