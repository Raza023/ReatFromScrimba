import { createRoot } from "react-dom/client"
import "./index.css"

function Header() {
    return (
        <header className="header">
            <img src="react-logo.png" className="nav-logo" alt="React logo" />
            <nav>
                <ul className="nav-list">
                    <li className="nav-list-item">Pricing</li>
                    <li className="nav-list-item">About</li>
                    <li className="nav-list-item">Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function MainContent() {
    return (
        <main>
            <h1>Reasons I am excited to learn React</h1>
            <ol>
                <li>React makes building modern user interfaces much easier and cleaner.</li>
                <li>I can create reusable components instead of rewriting the same code again and again.</li>
                <li>React is highly in demand in the frontend job market.</li>
                <li>Learning React will help me build real-world web applications.</li>
                <li>I enjoy the declarative style React uses for UI development.</li>
                <li>React has a huge community and tons of learning resources.</li>
                <li>I can build fast and interactive websites with React.</li>
                <li>React works really well with modern tools like Vite and Tailwind CSS.</li>
                <li>Many big companies use React in production, which makes it valuable to learn.</li>
                <li>React Native will allow me to build mobile apps using similar concepts.</li>
                <li>I want to improve my JavaScript skills by building projects with React.</li>
            </ol>
        </main>
    )
}

function Footer() {
    return (
        <footer>
            <small>© 2024 Raza development. All rights reserved.</small>
        </footer>
    )
}

function Page() {
    return (
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    )
}

const root = createRoot(document.getElementById("root"))
root.render(
    <Page />
)
