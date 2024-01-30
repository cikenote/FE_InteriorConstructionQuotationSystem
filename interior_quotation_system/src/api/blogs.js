// images
import blogImg1 from "/public/images/blog/img-1.jpg";
import blogImg2 from "/public/images/blog/img-1.jpg";
import blogImg3 from "/public/images/blog/img-1.jpg";

import blogSingleImg1 from "/public/images/blog/img-1.jpg";
import blogSingleImg2 from "/public/images/blog/img-1.jpg";
import blogSingleImg3 from "/public/images/blog/img-1.jpg";



const blogs = [
    {
        id: '1',
        slug:'Best-Architecture-Design',
        title: 'Best Architecture Design',
        thumb:'Architecture',
        screens: blogImg1,
        description: 'Consectetur adipiscing elit. Purusout phasellus malesuada lectus.',
        author: 'Nguyễn Hải Nam',
        authorTitle:'Nguyễn Khải Nam',
        create_at: '19 Jan, 2024',
        blogSingleImg:blogSingleImg1, 
        comment:'35',
        blClass:'format-standard-image',
    },
    {
        id: '2',
        slug:'Modern-Bedrooms-Tips',
        title: 'Modern Bedrooms Tips',
        thumb:'Interior',
        screens: blogImg2,
        description: 'Consectetur adipiscing elit. Purusout phasellus malesuada lectus.',
        author: 'Nguyễn Khải Nam',
        authorTitle:'Nguyễn Hải Nam',
        create_at: '19 Jan, 2024',
        blogSingleImg:blogSingleImg2, 
        comment:'80',
        blClass:'format-standard-image',
    },
    {
        id: '3',
        slug:'Decoration-Apartment',
        title: 'Decoration Apartment',
        thumb:'Architecture',
        screens: blogImg3,
        description: 'Consectetur adipiscing elit. Purusout phasellus malesuada lectus.',
        author: 'Nguyễn Khải Nam',
        authorTitle:'Nguyễn Hải Nam',
        create_at: '9 Jan, 2024',
        blogSingleImg:blogSingleImg3,
        comment:'95',
        blClass:'format-standard-image',
    },
];
export default blogs;