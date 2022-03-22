import { BlogArticle, Footer, Navbar } from "../components"
import { blog } from "../utils/data"

const BlogPage = () => {
    return (
        <div className="relative min-h-screen ">
            <Navbar />
            <div className="mx-6 sm:mx-12 md:mx-24 lg:mx-48 xl:mx-72 2xl:mx-96 ">
                {blog.map((data, key) => <BlogArticle key={key} data={data} />)}
            </div>
            <Footer />
        </div>

    )
}

export default BlogPage