import Link from "./Link";
function Sidebar () {
    const links = [
        {label: 'Dropdown', path: '/'},
        {label: 'Accordion', path: '/accordion'},
        {label: 'Buttons', path: '/buttons'},
        {label: 'Modal', path: '/modal'},
        {label: 'Table', path: '/table'}
    ];
    
    const renderedLinks = links.map( (link) => {
        return <Link key={link.label} to={link.path}> {link.label} </Link>
    });

    return (
        <div className="px-2 sticky top-0 flex flex-col">
            {renderedLinks}
        </div>
    );
}

export default Sidebar;