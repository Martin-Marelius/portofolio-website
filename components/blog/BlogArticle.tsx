
/**
 * @returns blog section
 */

const BlogArticle = (props) => {
    return (
        <div className="text-white mx-48 mt-12">
            <h1 className="font-bold text-2xl text-left">
                {props.data.title}
            </h1>

            <div id="line" className="bg-primary2 h-px mt-2 place-self-center" />

            <p className="mt-2">
                {props.data.paragraph}
            </p>

            <div className="flex flex-row gap-4 mt-2">
                {props.data.keywords.map((keyword) => <Keyword keyword={keyword}/>)}
            </div>


        </div>
    );
}

const Keyword = (props) => {
    return (
        <div className="bg-secondary rounded-full py-1 px-2 shadow-md ">
            <a className="text-sm">
                {props.keyword}
            </a>
        </div>
    )
}

export default BlogArticle