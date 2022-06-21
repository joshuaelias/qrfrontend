import { BarcodeScanner } from "./BarcodeScanner";
import './index.css'

export default function App() {
  return (
      <div className="App">
        <h1>Hello Tezos</h1>
        <h2>Start scanning</h2>

        <BarcodeScanner />
      </div>
  );
}
