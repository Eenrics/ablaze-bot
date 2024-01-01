import BallMixing from "./pages/ball-mixing/ball.mixing";
import History from "./pages/history/history";
import Home from "./pages/draw-display/home";
import Display from "./pages/draw-display/display/display";
import { GameTime, Renderer } from "./data/data.source";


function App() {
// console.log('isOnline'+ isOnline)
// TODO state hook with the value of newtwork,render component ,time,draw data
// CurrentGame()
// GameTime()


  return (
    <div className="w-screen h-full flex justify-center items-center">
    <Renderer/>
    </div>
  );
}

export default App;
