import { MdSearch } from 'react-icons/md';
import style from './search.module.css';

const Search = ({placeholder}) => {
    return (
        <div className={style.container}>
        <MdSearch/>
        <input type="text" placeholder={placeholder} className={style.input}/>
        </div>
    )
}

export default Search;