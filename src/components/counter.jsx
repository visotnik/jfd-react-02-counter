import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  // const tags = ["tag1", "tag2", "tag3"];
  const tags = [];

  // const x = <h1>Zero</h1>;

  const formCount = () => {
    return count === 0 ? "Zero" : count;
  };

  // bg-primary bg-danger dynamic class
  const getBageClasses = () => {
    let classes = "badge m-2 bg-";
    classes += count === 0 ? "danger" : "primary";

    return classes;
  };

  const renderTags = () => {
    if (tags.length === 0) return "Тегов не найдено";
    return tags.map((tag) => <li key={tag}>{tag}</li>);
  };

  const handleIncrement = (productId) => {
    console.log("clicked ", productId);
    setCount(count + 1);
  };
  const handleDecrement = (productId) => {
    console.log("clicked ", productId);
    if (count > 0) setCount(count - 1);
  };

  return (
    <>
      {/* Each child in a list should have a unique "key" prop. */}
      {/* запись через return */}
      {/* {tags.map((tag) => {
        return <li>{tag}</li>;
      })} */}
      {/* true&&false / && И возвращает первое ложное значение Или последнее, если ничего не найдено.*/}
      {/* {tags.length === 0 && "Тегов не найдено"} */}
      {/* запись упрощенная без return */}
      {/* {renderTags()} */}
      <span className={getBageClasses()}>{formCount()}</span>
      <button
        onClick={() => handleIncrement({ id: 1 })}
        className="btn btn-secondary btn-sm"
      >
        Increment
      </button>
      <button
        onClick={() => handleDecrement({ id: 2 })}
        className="btn btn-secondary btn-sm"
      >
        Decrement
      </button>
    </>
  );
};

export default Counter;
