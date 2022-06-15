import React from "react";

function displayEmojis(mins) {

    const emoji = mins < 30 ? "☕" : "🍷";
    const duration = mins < 30 ? 5 : 10;

    let emojis = "";

    for (let i = 0; i < mins; i += duration) {
        emojis += emoji;
    }

    return emojis;
}



function Article({ title, minutes, date = "January 1, 1970", preview }) {
    return (
        <article>
            <h3>{title}</h3>
            <small>
                {date} | {displayEmojis(minutes)} {minutes} minutes to read
            </small>
            <p>{preview}</p>
        </article>
    );
}

export default Article;