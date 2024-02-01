"use client"

import { MdSearch } from "react-icons/md";
import styles from "./search.module.css"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const Search = ({placeholder}) => {
  const searchParams = useSearchParams();
  const {replace} = useRouter()
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams)
    if(e.target.value){
      params.set("q", e.target.value)
    }
    else{
      params.delete("q")
    }
    replace(`${pathname}?${params}`)
  }, 300);

  return(
    <div className={styles.container}>
      <MdSearch />
      <input type="text" placeholder={placeholder} className={styles.input} onChange={handleSearch} />
    </div>
  )
}

export default Search;