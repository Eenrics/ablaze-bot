import "./index.css";

function Ball() {
  return (
    <div className="flex justify-center items-center animate-bounce">
      <div className="relative rounded-full w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-xl">
        <div className="absolute top-2 left-2 w-4 h-4 bg-white rounded-full opacity-40"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl">
          3
        </div>
      </div>
    </div>
  );
}

export default Ball;
