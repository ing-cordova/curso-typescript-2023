import React from "react";
import { Sub } from "./types";

interface Props {
  subs: Array<Sub>;
}

const List = ({ subs }: Props) => {
  return (
    <ul>
      {subs.map((sub) => (
        <li key={sub.nick}>
          <img src={sub.avatar} alt={sub.nick} />
          <div>
            <h4>
              {sub.nick} ({sub.subMonths})
            </h4>
            <p>{sub.description?.substring(0, 100)}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default List;
