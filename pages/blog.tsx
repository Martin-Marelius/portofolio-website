import { BlogArticle, Footer, Navbar } from "../components"
import { blog } from "../utils/data"

const BlogPage = () => {
    return (
        <div className="relative min-h-screen ">
            <Navbar />
            {blog.map((data) => <BlogArticle  data={data}/>)}
            <Footer />
        </div>

    )
}

export default BlogPage