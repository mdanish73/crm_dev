import { Children } from "react";

export const EachElement = ({ render, of }) =>
  Children.toArray(of.map((v, i) => render(v, i)));
