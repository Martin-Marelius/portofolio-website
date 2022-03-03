
/**
 * @returns a display of the blog and headlines for use on the homepage
 */

 const BlogDisplay = (props) => {
    return (
        <div className="text-white mt-24">
            <h1 className="font-bold text-2xl text-left">
                {props.data.title}
            </h1>

            <div id="line" className="bg-primary2 h-px mt-2 place-self-center" />

            <p className="mt-2">
                {props.data.paragraph}
            </p>

        </div>
    );
}

export default BlogDisplay