

type codeEmbedType = {

    /**
     * filename to be displayed at the top
     * if no filename, only display code
     */
    filename?: string 

    /**
     * each line of the code to embed.
     */
    code: string

    /**
     * the language for which syntax highlighting to use
     */
    language: string

}

export default codeEmbedType