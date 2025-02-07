import SpotlightImg from "../../../storage/app/public/images/spotlight/spotlightimg.png";
export default function Spotlight() {
    return (
        <>
            <div className="spotlight-container">
                <img
                    className="spotlight-image"
                    src={SpotlightImg}
                    alt="Spotlight"
                />
                <div className="spotlight-description-container">
                    <label>#Spotlight</label>
                    <h2 className="spotlight-title">Jujutsu Kaisen</h2>
                    <label className="spotlight-information">Manga 271</label>
                    <p className="spotlight-description">
                        Jujutsu Kaisen is the story of Yuji Itadori, an
                        easygoing high school student who joins the occult club
                        at school. When they accidentally summon grotesque
                        creatures by messing with a cursed object, Itadori
                        fights to save his friends' lives.
                    </p>
                </div>
            </div>
        </>
    );
}
