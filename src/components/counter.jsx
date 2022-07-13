import React, { useState } from 'react';

const Counter = (props) => {
  // console.log(props);
  // const [value, setValue] = useState(props.value);
  const { value } = props;
  // const [tags, setTags] = useState(['tag1', 'tag2', 'tag3']);

  const formatValue = () => {
    return value === 0 ? 'empty' : value;
  };

  const getBageClasses = () => {
    let classes = 'badge m-2 ';
    classes += value === 0 ? 'bg-warning' : 'bg-primary';
    return classes;
  };

  const handleIncrement = () => {
    // setValue((prevState) => prevState+1);
    console.log('handleIncrement');
  };

  const handleDecrement = () => {
    // setValue((prevState) => prevState-1);
    console.log('handleDecrement');
  };

  // const handleTagChange = (id) =>{
  //   // setTags(["tag4", "tag5"])
  //   setTags((prevState) =>prevState.filter(tag =>
  //     tag!==id
  //   ))
  //   // console.log(id);
  // };

  // const renderTags = () =>{
  //   // if(tags.length === 0){
  //   //   return "No Tags"
  //   // }
  //   return tags.length !== 0 && tags.map(tag =>(
  //     <li
  //       key={tag}
  //       className="btn btn-primary btn-sm m-2"
  //       onClick={() =>handleTagChange(tag)}
  //     >
  //       {tag}
  //     </li>
  // ));
  // };

  // if(tags.length !== 0) {
  //   return <ul>{renderTags()}</ul>;
  // }

  return (
    <div>
      <span>{props.name}</span>
      <span className={getBageClasses()}>{formatValue()}</span>
      <button className="btn btn-primary btn-sm m-2" onClick={() => props.onIncrement(props.id)}>
        +
      </button>
      <button className="btn btn-primary btn-sm m-2" onClick={() => props.onDecrement(props.id)}>
        -
      </button>
      <button className="btn btn-danger btn-sm m-2" onClick={() => props.onDelete(props.id)}>
        Delete
      </button>
    </div>
  );
};

export default Counter;
