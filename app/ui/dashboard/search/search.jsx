"use client"
import { MdSearch } from 'react-icons/md'
import styles from './search.module.css'
import { usePathname,useRouter,useSearchParams } from 'next/navigation'
const Search = ({placeholder}) =>{
    const searchParams = useSearchParams()
    const {replace} =useRouter();
    const pathname = usePathname();

    const handleSearch = (e) =>{
        const params = new URLSearchParams(searchParams) 
        
        params.set("page",1);
        if(e.target.value){
            e.target.value.length > 2 && params.set("q",e.target.value)
            
        }else{
            params.delete("q")
        }
        replace(`${pathname}?${params}`)
    }


    console.log(searchParams)
    console.log(pathname)

    return (
        <div className={styles.container}>
            <MdSearch/>
            <input type="text" placeholder={placeholder} className ={styles.input} onChange={handleSearch}/>
        </div>
    )
}

export default Search