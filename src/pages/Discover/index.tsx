import { useState } from "react";
import CategoryBlock from "./components/CategoryBlock";
import PlayList from "./components/PlayListBlock";

const Discover = () => {
  const [categoryText, setCategoryText] = useState<string>("全部");

  return (
    <div>
      <div style={{ fontSize: "50px", fontWeight: "bold" }}>发现</div>
      <CategoryBlock
        categoryText={categoryText}
        setCategoryText={setCategoryText}
      />
      <PlayList categoryText={categoryText} />
    </div>
  );
};

export default Discover;
