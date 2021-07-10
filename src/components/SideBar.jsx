import React from 'react';

import '../assets/styles/components/SideBar.css';

const SideBar = (props) => {
    const { arrayTitles } = props;
    return(
        <div className="container__sidebar">
            <div className="sidebar">
                { arrayTitles.map(title => (
                    <a href={`#${title.id}`} key={title.id} className="sidebar__item">
                        {title.title}
                    </a>
                ))}
            </div>
        </div>
    )
}

export default SideBar;