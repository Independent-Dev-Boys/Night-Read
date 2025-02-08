import Navbar from "../Components/Navbar.jsx";
import Spotlight from "../Components/Spotlight.jsx";
import Trending from "../Components/Trending.jsx";

export default function Home() {
    return (
        <>
            <header>
                <Navbar />
            </header>

            <Spotlight />
            <Trending />
        </>
    );
}
