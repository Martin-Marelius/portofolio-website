import { useEffect } from 'react'
import Keyword from "../utils/Keyword";

import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import lua from 'highlight.js/lib/languages/lua';
import 'highlight.js/styles/tokyo-night-dark.css';



/**
 * @props title: string, paragraph: string, keyword: string
 * @returns blog section tsx
 */

const BlogArticle = (props) => {

    hljs.registerLanguage('lang', javascript);
    
    useEffect(() => {
        hljs.initHighlighting();
    }, []);

    return (
        <div className="text-white mt-24">

            <h1 className="font-bold text-2xl text-left">
                {props.data.title}
            </h1>

            <div id="line" className="bg-primary2 h-px mt-2 place-self-center" />

            <pre><code className="lang rounded-xl shadow-xl mt-4 bg-white">
                {`fetch('{url}')
    .then(response => console.log(response));
`}
            </code></pre>

            <p className="mt-2">
                {props.data.paragraph}
            </p>

            <div className="flex flex-row gap-4 mt-2">
                {props.data.keywords.map((keyword: string) => <Keyword keyword={keyword} />)}
            </div>
        </div >
    );
}

export default BlogArticle