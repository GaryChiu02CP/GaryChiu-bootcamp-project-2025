var path = location.pathname.replace(/\/?blog\.html$/i, '/');
var blogContainer = document.getElementById('blog-container');
if (blogContainer) {
    var blogs = [
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
    ];
    blogs.forEach(function (blog) {
        var newBlog = document.createElement('div');
        var title = document.createElement("h2");
        title.textContent = blog.title;
        newBlog.appendChild(title);
        var date = document.createElement("h4");
        date.textContent = blog.date;
        newBlog.appendChild(date);
        var description = document.createElement("p");
        description.textContent = blog.description;
        newBlog.appendChild(description);
        var image = document.createElement("img");
        image.src = blog.image;
        image.alt = blog.imageAlt;
        newBlog.appendChild(image);
        var awrap = document.createElement("p");
        var a = document.createElement("a");
        a.href = path + "blogs/" + blog.slug + ".html";
        a.textContent = "Read more";
        awrap.appendChild(a);
        newBlog.appendChild(awrap);
        blogContainer.appendChild(newBlog);
    });
}
