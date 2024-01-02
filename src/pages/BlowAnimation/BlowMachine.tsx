export default function BlowMachine() {
  return (
    <div>
      <div className="flex justify-center items-center relative">
        <img
          src="assets/BlowMachine.png"
          alt="Blow Machine"
          className="max-w-full h-auto"
          onError={(e) => console.error("Image failed to load", e)}
        />
      </div>
    </div>
  );
}
