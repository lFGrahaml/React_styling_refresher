import { Alert } from "./Alert.tsx";
import "./App.css";

export default function App() {
  return (
    <div className="bg-gray-300">
      <Alert heading="Success" closable>
      Everything is really good!
    </Alert>
    </div>
  );
}