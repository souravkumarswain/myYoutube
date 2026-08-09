import { useEffect } from "react"
import CommentCard from "./CommentCard"
import { useDispatch, useSelector } from "react-redux"
import { addUserComment } from "../utils/commentSlice"
import { generateComments } from "../utils/helperFunctions"


const LiveComment = () => {
    const dispatch = useDispatch()
    const userComments = useSelector(store => store?.comment.userComments)
    useEffect(() => {
        const comments = setInterval(() => {
            dispatch(addUserComment(
                generateComments()
            ))
        }, 1500)

        return (() => {
            clearInterval(comments);
        })
    }, [])
    return (
        <div className='flex overflow-y-scroll h-50 flex-col-reverse'>
            {
                userComments.map((eachComment, i) => <CommentCard key={i} name={eachComment.author} comment={eachComment.quote} />)
            }
        </div>
    )
}

export default LiveComment