import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Home from '../components/homepage/home';

// Simple Navigation Component
// const NavigationBar = () => {
//   return (
//     <nav style={{
//       padding: '10px',
//       backgroundColor: '#f0f0f0',
//       marginBottom: '20px'
//     }}>
//       <Link 
//         to="/" 
//         style={{
//           marginRight: '10px',
//           textDecoration: 'none',
//           color: '#333'
//         }}
//       >
//         Home
//       </Link>
//     </nav>
//   );
// };

// // Test Home Page
// const HomePage = () => {
//   return (
//     <div style={{ padding: '20px' }}>
//       <h1 style={{ color: 'blue' }}>Welcome to My App</h1>
//       <p>This is the home page content.</p>
//     </div>
//   );
// };

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<home />} />
          <Route path="/home" element={Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;