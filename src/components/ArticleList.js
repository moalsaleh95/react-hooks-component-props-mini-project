import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
    let postsArray = posts.map(post => {
        return (
            <Article
                key={post.id}
                title={post.title}
                date={post.title}
                preview={post.preview}
                minutes={post.minutes} />)

    });


    return (<main>{postsArray}</main>);
}

export default ArticleList;