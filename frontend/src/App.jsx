import { useState } from "react";
import Chat from "./component/Chat";
import Landing from "./component/Landing";
import "./App.css";

function App() {
  const [showChat, setShowChat] = useState(false);

  return showChat ? (
    <Chat onBack={() => setShowChat(false)} />
  ) : (
    <Landing onOpenChat={() => setShowChat(true)} />
  );
}

export default App;
