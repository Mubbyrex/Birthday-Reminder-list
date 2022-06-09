import React from "react";

import { MdDelete } from "react-icons/md";

const List = ({ people, setPeople }) => {
  const deleteItem = (id) => {
    const newList = people.filter((person) => {
      return id !== person.id;
    });
    setPeople(newList);
  };
  return (
    <>
      {people.map((person) => {
        const { id, age, name, image } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div className="desc">
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
            <div onClick={() => deleteItem(id)}>
              <MdDelete className="delete" size={20} />
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
