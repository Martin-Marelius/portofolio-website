

/**
 * Interface for display of github projects.
 */

export default interface ProjectDisplay {

    // Field variables 

    title: string;
    readme:string;
    creationDate: string;
    images:[string]; // Array of filenames .jpg
    languages:[(string),(number)]; // (the programming language) and (% of the project written in that language)

    

}