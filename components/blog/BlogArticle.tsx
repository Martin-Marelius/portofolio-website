import { useEffect, useState } from 'react'
import Keyword from "../utils/Keyword";

import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import lua from 'highlight.js/lib/languages/lua';
import 'highlight.js/styles/tokyo-night-dark.css';
import ArticleType from '../types/ArticleType';
import { CreationDate, MainImage, MainTitle } from './components';

/**
 * @props title: string, paragraph: string, keyword: string
 * @returns blog section tsx
 */

const BlogArticle = (props) => {
    const [article, setArticle] = useState<ArticleType>(props.article)

    hljs.registerLanguage('lang', lua);

    useEffect(() => {
        hljs.initHighlighting();
        

    }, []);

    const getMaxLoop = (): number => {
        let maxLoop = 1;
        if (article.subImage !== undefined && article.subImage.length > maxLoop) {
            maxLoop = article.subImage.length
        }
        if (article.subTitle !== undefined && article.subTitle.length > maxLoop) {
            maxLoop = article.subTitle.length
        }
        if (article.code !== undefined && article.code.length > maxLoop) {
            maxLoop = article.code.length
        }
        if (article.paragraph !== undefined && article.paragraph.length > maxLoop) {
            maxLoop = article.paragraph.length
        }
        return maxLoop
    }

    return (
        <div className="text-white mt-24">

            <MainImage mainImage={article.mainImage} />
            <MainTitle mainTitle={article.mainTitle} />
            <CreationDate creationDate={article.creationDate} />

            <div id="line" className="bg-primary2 h-px mt-2 place-self-center" />

       
        </div >
    );
}

const ConditionalComponent = (props) => {

    return (
        <div>
            {props.index}
        </div>
    )
}

export default BlogArticle