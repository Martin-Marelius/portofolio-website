import Keyword from "../utils/Keyword";

/**
 * @props title: string, paragraph: string, keyword: string
 * @returns blog section tsx
 */

const BlogArticle = (props) => {
    return (
        <div className="text-white mt-24">
            <h1 className="font-bold text-2xl text-left">
                {props.data.title}
            </h1>

            <div id="line" className="bg-primary2 h-px mt-2 place-self-center" />

            <p className="mt-2">
                {props.data.paragraph}
            </p>

            <div className="flex flex-row gap-4 mt-2">
                {props.data.keywords.map((keyword:string) => <Keyword keyword={keyword}/>)}
            </div>


        </div>
    );
}

export default BlogArticle