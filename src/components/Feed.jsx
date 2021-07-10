import React from 'react';

import '../assets/styles/components/Feed.css';

const Feed = (props) => {
    const { content } = props;
    return(
        <>
            {content.map(con => (
                <div key={con.id}>
                    <h1 className="feed__title">{con.title}</h1>
                    {con.content}
                </div>
            ))}
        </>
    )
}

export default Feed;