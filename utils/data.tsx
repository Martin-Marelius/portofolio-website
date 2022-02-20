
type ProjectType = {
    title: string;
    readme: string;
    creationDate: string;
    images: string[];
    languages: (string | number)[];
}


let p1: ProjectType = {
    title: "Beatdetector",
    readme: "Praesent sed purus dolor. Curabitur tristique nisl augue, quis rutrum quam faucibus sit amet. Etiam venenatis sapien ut egestas ultrices. Aenean pulvinar, libero non luctus.",
    creationDate: "12.08.18",
    images: ["beatdetector.jpg"],
    languages: ["Java", 93, "HTML", 5, "CSS", 2]
}

let p2: ProjectType = {
    title: "StudyPartner",
    readme: "Sed maximus pretium nisi, luctus interdum massa. Donec malesuada, dui vel blandit luctus, augue neque hendrerit sem, id imperdiet augue lectus id arcu. Aliquam vel.",
    creationDate: "12.08.18",
    images: ["beatdetector.jpg"],
    languages: ["React Native", 55, "CSS", 23, "JavaScript", 22]
}

let p3: ProjectType = {
    title: "Number and Integer",
    readme: "Integer vel magna in mauris dapibus cursus. Proin at nisl et dui vestibulum sagittis eget at orci. Maecenas lectus ipsum, rhoncus eget varius ut, molestie.",
    creationDate: "12.08.18",
    images: ["beatdetector.jpg"],
    languages: ["TypeScript", 81, "HTML", 10, "CSS", 9]
}


type BlogType = {
    title: string;
    paragraph: string;
    creationDate: string;
    keywords: string[];
}

let b1: BlogType = {
    title: "Aenan Comdinendum",
    paragraph: "Nullam et risus a purus tempus aliquam. Aenean condimentum feugiat nunc a consequat. Morbi vestibulum magna nec consequat suscipit. Sed suscipit nisl diam, eget vestibulum purus luctus nec. Nunc condimentum luctus risus ut ullamcorper. Pellentesque tristique rhoncus dictum. Sed nibh nibh, rutrum ac bibendum eu, vulputate et tellus. Quisque laoreet lacus ut enim rutrum, vitae aliquet lorem pretium. Mauris vulputate tellus ac velit feugiat ullamcorper. Mauris feugiat sed libero vitae condimentum. Maecenas non ipsum vel ante tempus rhoncus et vitae turpis. Integer dignissim dictum tincidunt. Aenean arcu enim, tristique vel est ut, dignissim cursus urna. Vestibulum in dapibus dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    creationDate: "12.08.21",
    keywords: ["TypeScript", "CSS", "React"]
}

let b2: BlogType = {
    title: "Efficitur Nulla Vel",
    paragraph: "Suspendisse eget mauris vel metus vehicula elementum. Maecenas nisl augue, commodo in sem in, convallis egestas enim. Nullam efficitur nulla vel consectetur commodo. Aliquam vestibulum pulvinar ligula sed tristique. Praesent volutpat dolor non feugiat viverra. Ut sollicitudin finibus nisi, in varius leo commodo sed. Phasellus scelerisque eget nulla at malesuada. Fusce fringilla ipsum sit amet mollis varius. Aliquam velit erat, cursus ut feugiat nec, facilisis eget lorem. Aliquam lorem justo, congue eget bibendum id, rutrum id justo. In quis accumsan dolor.",
    creationDate: "02.01.22",
    keywords: ["TypeScript", "CSS", "React"]
}

let b3: BlogType = {
    title: "Viverra Risus",
    paragraph: "Maecenas sit amet interdum odio, a tincidunt sem. Integer diam nulla, dapibus id nisi eget, gravida viverra risus. Duis massa dui, tempor ut risus in, porta euismod ex. Nulla sed laoreet magna, id aliquet lectus. Etiam ex justo, molestie ut consectetur a, finibus a ante. Fusce faucibus tincidunt massa eget venenatis. Cras aliquet, nisl sit amet bibendum tincidunt, leo quam commodo odio, ac tempus sem libero ac eros. Praesent commodo arcu nec ipsum vehicula, egestas pulvinar leo scelerisque.    ",
    creationDate: "13.05.20",
    keywords: ["TypeScript", "CSS", "React"]
}

let projects: Array<ProjectType>;
projects.push(p1); projects.push(p2); projects.push(p3);

let blog: Array<BlogType>;
blog.push(b1); blog.push(b2); blog.push(b3);





export { blog, projects }