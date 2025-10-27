type Blog = {
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
}

const path = location.pathname.replace(/\/?blog\.html$/i, '/');

const blogContainer = document.getElementById('blog-container');

if (blogContainer) {
    const blogs: Blog[] = [
        {
            title: "blog1",
            date: '2025-10-14',
            description: 'Short excerpt 1',
            image: '/images/b.jpg',
            imageAlt: 'picture of a',
            slug: 'blog1'
        },
        {
            title: "blog2",
            date: '2025-10-16',
            description: 'Short excerpt 2',
            image: '/images/d.jpg',
            imageAlt: 'picture of d',
            slug: 'blog2'
        }
    ]
    blogs.forEach((blog) => {
        const newBlog = document.createElement('div');

        const title = document.createElement("h2");
        title.textContent = blog.title;
        newBlog.appendChild(title);

        const date = document.createElement("h4");
        date.textContent = blog.date;
        newBlog.appendChild(date);

        const description = document.createElement("p");
        description.textContent = blog.description;
        newBlog.appendChild(description);

        const image = document.createElement("img");
        image.src = blog.image;
        image.alt = blog.imageAlt;
        newBlog.appendChild(image);

        const awrap = document.createElement("p");
        const a = document.createElement("a");
        a.href = path + "blogs/"+ blog.slug + ".html";
        a.textContent = "Read more";
        awrap.appendChild(a);
        newBlog.appendChild(awrap);

        blogContainer.appendChild(newBlog);
    });
}