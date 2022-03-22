
/**
 * articleType
 * 
 * follows the current hierarchy of display order:
 * 
 * mainImage
 * mainTitle
 * creationDate
 * 
 * then if the number is the same this is the display order of multiple components
 * 
 * 1, subImage?
 * 1, subTitle?
 * 1, code?
 * 1, paragraph
 * 
 * ...
 * 
 * keywords
 * 
 * example of a full blog article structure:
 * 
 * mainImage
 * mainTitle
 * creationDate
 * 
 * [1, paragraph]
 * [2, subTitle]
 * [2, paragraph]
 * [4, code]
 * [4, paragraph]
 * [5, subImage]
 * [5, paragraph]
 * 
 * keywords
 * 
 */

import codeEmbedType from "./codeEmbedType";

type articleType = {

    /**
     * must contain mainTitle, also used for small display at homepage.
     * subTitle is not necessary, and is put in the order according to [number] in the article.
     */
    mainTitle: string;
    subTitle?: [number ,string][];

    /**
     * every article has a main image, used for small display on homepage and image on top of the full article. 
     * subImages is not necessary, and is put in the order according to [number] in the article.
     */
    mainImage: string;
    subImage?: [number ,string][];

    /**
     * the paragraphs of the article sorted according to [number].
     * the first paragraph is also used as a sneakpeek on the homepage.
     */
    paragraph: [number ,string][];

    /**
     * add if there is any inline code to be displayed in a pretty format.
     * code is not necessary, and is put in the order according to [number] in the article.
     */
    code?: [number ,codeEmbedType][];

    /**
     * date published, on the format of dd/mm/yyyy.
     */
    creationDate: string;

    /**
     * array of keywords of important topics the article talks about. also used in a sneakpeek.
     */
    keywords: string[];
}

export default articleType