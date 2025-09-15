import { useState } from "react";
import { Cart } from "./components/cart/Cart";
import { StudyList } from "./components/studies/StudyList";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={`${darkMode ? "dark-mode" : ""} min-h-screen bg-white`}>
      <button onClick={() => setDarkMode((prev) => !prev)}>
        {darkMode ? "Wyłącz dark mode" : "Włącz dark mode"}
      </button>
      <div className="max-w-[1440px] mx-auto px-4 py-8 ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <StudyList />
          </div>
          <div className="lg:col-span-1 sticky top-4 self-start">
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
