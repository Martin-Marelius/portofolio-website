import ProjectDisplay from "../../interfaces/ProjectDisplay/ProjectDisplayInterface";

export class ProjectsDisplay implements ProjectDisplay {

    title:string;
    readme:string;
    creationDate: string;
    images:[string]; 
    languages:[(string),(number)];

}

export const Display = () => {
    return (
        <div>
            ProjectsDisplay
        </div>
    );
}






