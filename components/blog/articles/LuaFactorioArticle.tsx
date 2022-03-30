
/**
 * 
 * @returns a full article
 */

import { CreationDate, MainImage, MainTitle } from "../components"

const LuaFactorioArticle = () => {
    return (
        <>
            <MainImage image="factorio.jpg" />
            <MainTitle title="Introduction to Lua Scripting and Factorio Modding" />
            <CreationDate date="March 30th 2022" />

            <div id="line" className="bg-primary2 h-px mt-2 place-self-center" />



        </>
    )
}

export default LuaFactorioArticle