/**
 * @param props keyword: string
 * @returns tsx for a styled keyword 
 */

const Keyword = (props) => {
    return (
        <div className="bg-secondary rounded-full py-1 px-2 shadow-md ">
            <a className="text-sm">
                {props.keyword}
            </a>
        </div>
    )
}

export default Keyword;