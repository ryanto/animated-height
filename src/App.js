import { CardWithHeight } from "./card-with-height";
import { CardWithHeightRef } from "./card-with-height-ref";

function App() {
  return (
    <div className="p-8">
      <h1 className="text-gray-800 font-medium text-xl">
        Question about animating height
      </h1>
      <div className="text-gray-700 max-w-xl mt-3">
        <p>
          When the toggle button below is pressed the content inside the card
          will change, which causes the height of the card to change.
        </p>
        <p className="mt-3">
          What's the best way to smoothly animate the height?
        </p>
      </div>
      <div className="mt-4">
        <CardWithHeight />
      </div>

      <div className="text-gray-700 max-w-xl mt-12">
        <p>
          I was able to use a ref to track the initial height and animate to and
          from that value.
        </p>
      </div>
      <div className="mt-4">
        <CardWithHeightRef />
      </div>

      <div className="text-gray-700 max-w-xl mt-12">
        <p className="mt-3">
          Is this approach okay? or is there a better way to think about this?
        </p>
      </div>
    </div>
  );
}

export default App;
