import MountHuaSectCover from "../../../storage/app/public/images/cover/mount-hua-sect-cover.png";
export default function Trending() {
    return (
        <>
            <div className="bg-[#1E1E1E] w-full h-[516px] p-[50px]">
                <label className="text-[#D9D9D9] text-6xl">Trending</label>
                <div className="flex justify-between">
                    <div>
                        <ul className="mt-[50px] flex flex-row gap-10 overflow-x-auto mr-[20px]">
                            <li>
                                <div className="w-[300px] h-[350px] block relative">
                                    <div className="w-[74px] text-[#D9D9D9] text-6xl absolute">
                                        01
                                    </div>

                                    <div className="w-[280px] h-[78px] text-left text-white text-3xl -rotate-45 absolute mt-[160px] ml-[-105px]">
                                        The Return of Mount Hua Sect
                                    </div>

                                    <img
                                        className="w-[221px] h-[347px] aboslute ml-auto"
                                        src={MountHuaSectCover}
                                    />
                                </div>
                            </li>
                            <li>
                                <div className="w-[300px] h-[350px] block relative">
                                    <div className="w-[74px] text-[#D9D9D9] text-6xl absolute">
                                        01
                                    </div>

                                    <div className="w-[280px] h-[78px] text-left text-white text-3xl -rotate-45 absolute mt-[160px] ml-[-105px]">
                                        The Return of Mount Hua Sect
                                    </div>

                                    <img
                                        className="w-[221px] h-[347px] aboslute ml-auto"
                                        src={MountHuaSectCover}
                                    />
                                </div>
                            </li>
                            <li>
                                <div className="w-[300px] h-[350px] block relative">
                                    <div className="w-[74px] text-[#D9D9D9] text-6xl absolute">
                                        01
                                    </div>

                                    <div className="w-[280px] h-[78px] text-left text-white text-3xl -rotate-45 absolute mt-[160px] ml-[-105px]">
                                        The Return of Mount Hua Sect
                                    </div>

                                    <img
                                        className="w-[221px] h-[347px] aboslute ml-auto"
                                        src={MountHuaSectCover}
                                    />
                                </div>
                            </li>
                            <li>
                                <div className="w-[300px] h-[350px] block relative">
                                    <div className="w-[74px] text-[#D9D9D9] text-6xl absolute">
                                        01
                                    </div>

                                    <div className="w-[280px] h-[78px] text-left text-white text-3xl -rotate-45 absolute mt-[160px] ml-[-105px]">
                                        The Return of Mount Hua Sect
                                    </div>

                                    <img
                                        className="w-[221px] h-[347px] aboslute ml-auto"
                                        src={MountHuaSectCover}
                                    />
                                </div>
                            </li>
                            <li>
                                <div className="w-[300px] h-[350px] block relative">
                                    <div className="w-[74px] text-[#D9D9D9] text-6xl absolute">
                                        01
                                    </div>

                                    <div className="w-[280px] h-[78px] text-left text-white text-3xl -rotate-45 absolute mt-[160px] ml-[-105px]">
                                        The Return of Mount Hua Sect
                                    </div>

                                    <img
                                        className="w-[221px] h-[347px] aboslute ml-auto"
                                        src={MountHuaSectCover}
                                    />
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="">
                        <button className="bg-[#FFFFFF] w-[93px] h-[170px] rounded-3xl mt-[50px]">
                            Left
                        </button>
                        <button className="bg-[#FFFFFF] w-[93px] h-[170px] rounded-3xl mt-[7px]">
                            Right
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
