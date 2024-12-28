import { createRoot } from 'react-dom/client'
import UserContext from "./UserContext";
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
<UserContext>

<App />
</UserContext>
    
)