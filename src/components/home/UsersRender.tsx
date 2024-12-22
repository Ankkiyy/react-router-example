import { useEffect, useState } from "react";
import { useParams } from "react-router";

const UsersRender  = () => {
  const { uid } = useParams()

  const [uuid, setUuid] = useState('')

  // Example of API call
  useEffect(() => {
    setUuid(uid + '123')
  }, [uid])

  return (
    <>
     <div>Your User Id = {uuid}</div>
    </>
  )
}

export default UsersRender