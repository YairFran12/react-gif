import React from "react";
import { useState } from "react";
import { AddCategory } from "./AddCategory";
import PropTypes from "prop-types";
import { GifGrid } from "./GifGrid";

const GifExpertApp = () => {
  const [categorias, setCategorias] = useState(["Hulk"]);

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory setCategorias={setCategorias} />
      <hr></hr>

      <ol>
        {categorias.map((category) => {
          return <GifGrid key={category} category={category} />;
        })}
      </ol>
    </>
  );
};

export default GifExpertApp;

AddCategory.propTypes = {
  setCategorias: PropTypes.func.isRequired,
};
