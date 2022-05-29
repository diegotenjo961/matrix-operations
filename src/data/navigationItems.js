import { AiFillGithub } from 'react-icons/ai';
import { SiTwitter } from 'react-icons/si';

const navigationItems = [
    {
        id: 1,
        icon: false,
        content: "matrix",
        pathname: "/"
    },
    {
        id: 2,
        icon: false,
        content: "results",
        pathname: "/results",
    },
    {
        id: 3,
        icon: false,
        content: "documentation",
        pathname: "/documentation",
    },
    {
        id: 4,
        icon: true,
        content: <AiFillGithub />,
        pathname: "https://github.com/elcokiin/matrix-operations/",
    },
    {
        id: 5,
        icon: true,
        content: <SiTwitter />,
        pathname: "https://twitter.com/elcokiin",
    }
]

export default navigationItems;
