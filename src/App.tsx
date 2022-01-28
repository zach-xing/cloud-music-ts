import { useState, memo } from "react";

// 有延迟的组件
const ExpensiveRender = memo(() => {
  const now = performance.now();
  while (performance.now() - now < 100) {
    // 模拟一个延迟
  }
  console.log("渲染了一个有延迟的组件");
  return <h3>ExpensiveRender 组件</h3>;
});

function App() {
  const [color, setColor] = useState("red");

  return (
    <div style={{ color: color }}>
      <input
        type="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <p>Hello, World!</p>
      <ExpensiveRender />
    </div>
  );
}

export default App;
