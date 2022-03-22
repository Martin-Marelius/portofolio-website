import { useEffect, useState } from 'react'
import Keyword from "../utils/Keyword";

import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import lua from 'highlight.js/lib/languages/lua';
import 'highlight.js/styles/tokyo-night-dark.css';
import ArticleType from '../types/ArticleType';

/**
 * @props title: string, paragraph: string, keyword: string
 * @returns blog section tsx
 */

const BlogArticle = (props) => {
    const [article, setArticle] = useState<ArticleType>()

    hljs.registerLanguage('lang', lua);

    useEffect(() => {
        setArticle(props.article)
        hljs.initHighlighting();
    }, []);

    return (
        <div className="text-white mt-24">

            <h1 className="font-bold text-2xl text-left">
                {article.mainTitle}
            </h1>

            <div id="line" className="bg-primary2 h-px mt-2 place-self-center" />

            <pre><code className="lang rounded-xl shadow-xl mt-4 bg-white">
                {}
            </code></pre>

            <p className="mt-2">
                {article.paragraph}
            </p>

            <div className="flex flex-row gap-4 mt-2">
                
            </div>
        </div >
    );
}

export default BlogArticle