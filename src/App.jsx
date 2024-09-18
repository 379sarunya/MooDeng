import { useState } from "react";
import "./App.css"; 

export default function App() {
  const [level, setLevel] = useState(0);
  const [MooDengSize, setMooDengSize] = useState(200);
  const [MooDengImage, setMooDengImage] = useState("https://www.khaosod.co.th/wpapp/uploads/2024/09/Nong-Moo-Deng4548-5.jpg");

  const feedMooDeng = (amount) => {
    const newLevel = level + amount;
    setLevel(newLevel);
    
    const newSize = MooDengSize + amount;
    setMooDengSize(newSize > 1000 ? 1000 : newSize); 

    if (newLevel > 100) {
      setMooDengImage("https://mitrpholsugar.com/wp-content/uploads/2023/02/Web-Feature-img_%E0%B8%AB%E0%B8%A1%E0%B8%B9%E0%B8%AE%E0%B9%89%E0%B8%AD%E0%B8%87_1568x1044.png");
    }
  };

  return (
    <div className="game-container">
      <h1 className="game-title">เกมส์เลี้ยงหมูเด้ง</h1>
      <h1 className="level-display">Level: {level}</h1>
      <img
        src={MooDengImage}
        alt="หมูเด้ง"
        className="moo-image"
        style={{ width: MooDengSize + "px" }}
      />

      <div className="food-buttons">
        <div className="food-item-container">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgsEz8s5qDhAgRQvfHQbcCZwaDH-vYKnAwvg&s"
            alt="แตงโม"
            onClick={() => feedMooDeng(5)}
            className="food-item"
          />
          <p>แตงโม = 5</p>
        </div>
        <div className="food-item-container">
          <img
            src="https://www.calforlife.com/image/food/pumpkin.jpg"
            alt="ฟักทอง"
            onClick={() => feedMooDeng(10)}
            className="food-item"
          />
          <p>ฟักทอง = 10</p>
        </div>
        <div className="food-item-container">
          <img
            src="https://www.chokchai.go.th/wp-content/uploads/2022/08/image-photo2-95902.jpg"
            alt="หญ้า"
            onClick={() => feedMooDeng(20)}
            className="food-item"
          />
          <p>หญ้า = 20</p>
        </div>
      </div>
    </div>
  );
}
