import Accordion from "../components/Accordion";
function AccordionPage () {
    const items = [
        {
            label: 'Can I use React on a project?',
            content: 'Yes, you can.',
            id: 'item1'
        },
        {
            label: 'Can I use JS on a project?',
            content: 'Yes, you can.',
            id: 'item2'
        },
        {
            label: 'Can I use CSS on a project?',
            content: 'Yes, you can.',
            id: 'item3'
        }
    ];
    return (
            <Accordion items = {items}/>
    );
}
export default AccordionPage;