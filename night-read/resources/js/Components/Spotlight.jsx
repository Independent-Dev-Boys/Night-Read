import SpotlightImg from "../../../storage/app/public/images/spotlight/spotlightimg.png";
export default function Spotlight() {
    return (
        <>
            <div
                className="relative w-full h-[790px]"
                style={{
                    backgroundImage: `url(${SpotlightImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="w-[714px] h-[415px] bg-[#FFFFFF] border-[10px] border-black absolute mt-[350px] ml-[50px] p-[10px] pt-[50px]">
                    <label className="text-4xl">#Spotlight</label>
                    <h2 className="text-6xl font-bold">Jujutsu Kaisen</h2>
                    <label className="text-2xl">Manga 271</label>
                    <p className="text-2xl">
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
