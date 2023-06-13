import React from "react";
import Article from "./Article"

function ArticleList({posts}){

    const articleList = posts.map ((art) => {return (<Article key = {art.id}  title = {art.title} date = {art.date} preview = {art.preview} />)} )

    return (
        <main>
            {articleList}
        </main>
    )
 
}

export default ArticleList