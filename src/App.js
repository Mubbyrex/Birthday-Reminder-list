import React, { useState } from "react";
import data from "./data";
import List from "./List";

const App = () => {
  const clickButton = () => setPeople([]);
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{`${people.length} birthdays Today`}</h3>
        <List people={people} setPeople={setPeople} />
        <button className="btn" onClick={clickButton}>
          Clear All
        </button>
      </section>
    </main>
  );
};

export default App;

/* 
create a cacnel btn
write a handlesubmit function
filter out id of selected item
return the list without the id of the selected item
*/
