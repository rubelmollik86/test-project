import React, { useState } from 'react';
import { blogdata } from "../data"
const Blogs = () => {
    const [blogs, setBlogs] = useState(blogdata);

    return (
        <div>
            <h1>Blogs Pages</h1>
            <section>
                {blogs.map((blog) => {
                    const {id, title, body} = blog;
                    return <article key={id}>
                        <h1>{title}</h1>
                        <p>{body}</p>

                    </article>
                })}
            </section>
        </div>
    );
};

export default Blogs;