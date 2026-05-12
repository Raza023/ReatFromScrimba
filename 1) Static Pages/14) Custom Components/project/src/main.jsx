
import { createRoot } from 'react-dom/client'
import './index.css'

createRoot(document.getElementById('root')).render(
    <Page />
)

function Page() {
    return (
        <>
            <img src="react-logo.png" alt="React logo" width="40px" />
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Meta</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </>
    )
}
