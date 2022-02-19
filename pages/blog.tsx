import { BlogArticle, Footer, Navbar } from "../components"

const BlogPage = () => {
    return (
        <div className="relative min-h-screen ">
            <Navbar />
            <BlogArticle />
            <Footer />
        </div>

    )
}

export default BlogPage