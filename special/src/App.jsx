import { Routes, Route } from "react-router-dom";
import EntryPage from "./components/EntryPage";
import SurprisePage from "./components/SurprisePage";
import MessagePage from "./components/MessagePage";
import MemoryPage from "./components/MemoryPage";
import ComedyPage from "./components/ComedyPage";
import EmotionalPage from "./components/EmotionalPage";
import MorePage from "./components/MorePage";
import LastPage from "./components/LastPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<EntryPage />} />
      <Route path="/surprise" element={<SurprisePage />} />
      <Route path="/message" element={<MessagePage />} />
      <Route path="/memory" element={<MemoryPage />} />
      <Route path="/comedy" element={<ComedyPage />} />
      <Route path="/emotional" element={<EmotionalPage />} />
      <Route path="/more" element={<MorePage />} />
      <Route path="/last" element={<LastPage />} />
    </Routes>
  );
}
