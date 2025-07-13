import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function RouteLogger() {
  const location = useLocation();
  
  useEffect(() => {
    console.log('Route changed to:', location.pathname);
  }, [location]);

  return null;
}

// Add inside your Router component:
<Router>
  <RouteLogger />
  {/* ... rest of your app ... */}
</Router>


function RouteLogger() {
  const location = useLocation();
  
  useEffect(() => {
    console.log('Route changed to:', location.pathname);
  }, [location]);

  return null;
}

// Add inside your Router component:
<Router>
  <RouteLogger />
  {/* ... rest of your app ... */}
</Router>
