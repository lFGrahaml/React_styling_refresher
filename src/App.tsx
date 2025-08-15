import { Alert } from "./Alert.tsx";
import "./App.css";

export default function App() {
  return (
    <Alert heading="Success" closable>
      Everything is really good!
    </Alert>
  );
}