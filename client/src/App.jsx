import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import EventsPage from './pages/EventsPage';
import Home from './pages/Home';
import Layout from './components/Layout';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/events" element={<EventsPage />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
