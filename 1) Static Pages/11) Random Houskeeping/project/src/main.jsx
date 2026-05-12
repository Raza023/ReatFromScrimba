import { createRoot } from 'react-dom/client'
import './index.css'
import catImage from './assets/cat.png'


const root = createRoot(document.getElementById('root'))
root.render(
    <>
        <h1>A cute little cat!</h1>
        <img src={catImage} alt="a cat" className="main-img" />
    </>
)
