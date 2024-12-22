import { useEffect } from "react";
import { useSearchParams } from "react-router";

const UsersSearch  = () => {
  const [searchParams] = useSearchParams()

  useEffect(() => {
    console.log(searchParams)
  }, [searchParams])

  return (
    <>
     <div>You Searched for {searchParams}</div>
    </>
  )
}

export default UsersSearch