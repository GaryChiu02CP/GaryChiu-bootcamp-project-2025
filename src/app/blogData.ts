export interface Blog { // type also works
    key: number;
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
}

const blogs: Blog[] = [
    {
        key: 1,
        title: "blog1",
        date: '2025-10-14',
        description: 'Description 1',
        image: '/images/b.jpg',
        imageAlt: 'picture of image 1'
    },
    {
        key: 2,
        title: "blog2",
        date: '2025-10-16',
        description: 'Description 2',
        image: '/images/d.jpg',
        imageAlt: 'picture of image 2'
    }
];

export default blogs; // This will allow us to access this data anywhere!