import './LinkList.css';

const LinkList = ({ itemsList = [] }) => (
    <ul className="link-list">
        {
            itemsList.map((item, index) => (
                <li key={index} className="link-list-item">
                    <a className={`link-list-item-link ${item?.active && 'active'}`} aria-current="page" href={item.url}>{item.title}</a>
                </li>
            ))
        }
    </ul>
);

export default LinkList;