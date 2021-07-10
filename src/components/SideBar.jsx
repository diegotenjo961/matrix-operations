import React from 'react';

import '../assets/styles/components/SideBar.css';

const SideBar = (props) => {
    const { content } = props;
    return(
        <div className="container__sidebar">
            <div className="sidebar">
                { content.map(title => (
                    <a href={`#${title.id}`} key={title.id} className="sidebar__item">
                        {title.title}
                    </a>
                ))}
            </div>
        </div>
    )
}

export default SideBar;