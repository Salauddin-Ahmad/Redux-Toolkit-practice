import { useSelector } from "react-redux"

const PostView = () => {
  const user = useSelector(state => console.log(state))
  return (
    <div>PostView</div>
  )
}

export default PostView