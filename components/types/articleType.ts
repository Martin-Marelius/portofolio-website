
/**
 * articleType
 * 
 * follows the current hierarchy of display order:
 * 
 * mainImage
 * mainTitle
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
 * keywords, creationdate
 * 
 */

type articleType = {
    mainTitle: string;
    subTitle?: [number ,string][];
    mainImage: string;
    subImage?: [number ,string][];
    paragraph: [number ,string][];
    code?: [number ,string][];
    creationDate: string;
    keywords: string[];
}

export default articleType