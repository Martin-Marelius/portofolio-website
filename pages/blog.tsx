import { useEffect, useState } from "react"
import { BlogArticle, Footer, Navbar } from "../components"
import { blog } from "../utils/data"
import ArticleType from "../components/types/ArticleType"
import { blogExample } from "../components/utils/blogExample"
import { LuaFactorioArticle } from "../components/blog/articles"

const BlogPage = () => {
    const [article, setArticle] = useState<ArticleType>(blogExample)

    useEffect(() => {
        
    }, []);
    return (
        <div className="relative min-h-screen ">
            <Navbar />
            <div className="mx-6 sm:mx-12 md:mx-24 lg:mx-48 xl:mx-72 2xl:mx-96 ">
                <LuaFactorioArticle />
            </div>
            <Footer />
        </div>

    )
}

export default BlogPage