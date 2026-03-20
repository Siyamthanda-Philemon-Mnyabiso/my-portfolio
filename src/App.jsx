import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import "./index.css"; // Tailwind directives

function App() {
    return (
        <div className="max-w-6xl mx-auto px-4">
            <Navbar />
            <Hero
                title="Welcome to my world"
                description="Let's explore this little mind of mine"
                buttonText="View Projects"
            />
            <Projects ProjectHeader="My Work" />
        </div>
    );
}

export default App;