import { HeartIcon, ReplyIcon, SendHorizonal, User2 } from "lucide-react";
import { useUser } from "@clerk/clerk-react";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

const URLs = import.meta.env.VITE_BASEURL;

const Comment = () => {
  const [fetchComment, setFetchComment] = useState([]);
  const newComment= useRef()
  const [newReply, setNewReply] = useState("");
  const [isReplyBox, setIsReplyBox] = useState(null);

  const { id } = useParams();
  const username = useUser().user.username;

  // Fetch comments
  useEffect(() => {
      const fetchComments = async () => {
          try {
              const res = await fetch(`${URLs}/reaction/${id}`);
              const data = await res.json();
              setFetchComment(data.data);
          } catch (err) {
              console.error(err);
              toast.error("Failed to fetch comments.");
          }
      };
      fetchComments();
  }, []);

  console.log(fetchComment)
  // Add a new comment
  const handleAddComment = async () => {
    
      const postingData = { comment: newComment.current.value, username, blog_id: id };
      
      try {
          const res = await fetch(`${URLs}/reaction/${id}`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(postingData),
          });

          if (res.ok) {
              // const nComment = await res.json();
              setFetchComment((prev) => [...prev, postingData] || []);
              newComment.current.value = ''
              toast.success("Comment added successfully!");
          } else {
              const errorData = await res.json();
              toast.error(errorData.msg || "Failed to post comment.");
          }
      } catch (err) {
          console.error(err);
          toast.error("Error adding comment.");
      }
  };

  // Add a reply
  // const handleReplyToComment = async () => {
  //     const replies = {
  //         parent_comment_id: isReplyBox,
  //         reply_comment: newReply,
  //         reply_username: username,
  //     };

  //     try {
  //         const res = await fetch(`${URLs}/reaction/${id}`, {
  //             method: "POST",
  //             headers: { "Content-Type": "application/json" },
  //             body: JSON.stringify(replies),
  //         });

  //         if (res.ok) {
  //             const updatedComment = await res.json();
  //             // Update the comment state to reflect the new reply
  //             setFetchComment((prevComments) => [...prevComments, updatedComment] )
  //             setNewReply("");
  //             setIsReplyBox(null);
  //             toast.success("Reply added successfully!");
  //         } else {
  //             const errorData = await res.json();
  //             toast.error(errorData.msg || "Failed to add reply.");
  //         }
  //     } catch (err) {
  //         console.error(err);
  //         toast.error("Error adding reply.");
  //     }
  // };

  return (
    <div className="w-full p-3 my-10 border rounded-lg">
      <h2 className="text-sm md:text-[16px] lg:text-xl font-semibold mb-4">{"// "}Comments</h2>

      {/* Add a New Comment */}
      <div className="mb-6">
        <input
        ref={newComment}
          className="w-full  p-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black bg-transparent"
          placeholder="Write a comment..."
         />
        <div className="flex justify-end mt-2">
          <button
            className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            onClick={handleAddComment}
          >
            <SendHorizonal size={"20px"}/>
          </button>
        </div>
      </div>

      {/* Render Comments */}

      
      { (fetchComment?.length || [] )> 0 ? (
        fetchComment.map((comment) => (
          <div key={comment._id} className="space-y-5 p-1 border-b">
            {/* Comment */}
            <div>
              <div className="flex items-center space-x-2">
                <span className="bg-black p-2 flex justify-center rounded-full">
                  <User2 color="white" />
                </span>
                <h5 className="flex flex-col font-medium">
                  {comment.username}
                  
                </h5>
              </div>
              <p className="ml-12 text-sm opacity-90">{comment.comment || newComment}</p>
              <div className="ml-12 mt-5 flex gap-4">
                <button>
                  <span className="flex gap-2 text-sm">
                    <HeartIcon fill="red" color="" /> {comment.likes} likes
                  </span>
                </button>
                <button onClick={() => setIsReplyBox(comment._id)}>
                  <span className="flex gap-2">
                    <ReplyIcon /> Reply
                  </span>
                </button>
              </div>
            </div>

            {/* Replies */}
            {/* {comment.replies.map((reply) => (
              <div key={reply._id} className="border-l-2 border-gray-300 pl-10">
                <div className="flex items-center space-x-2">
                  <span className="bg-black p-2 flex justify-center rounded-full">
                    <User2 color="white" />
                  </span>
                  <h5 className="flex flex-col">
                    {reply.reply_username}
                    <span className="opacity-50 text-sm">20 minutes ago</span>
                  </h5>
                </div>
                <p className="ml-12">{reply.reply_comment}</p>
              </div>
            ))} */}

            {/* Reply Box */}
            {isReplyBox === comment._id && (
              <div>
                <textarea
                  className="w-full h-[120px] p-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
                  placeholder="Write a reply..."
                  value={newReply}
                  onChange={(e) => setNewReply(e.target.value)}
                />
                <div className="flex justify-end mt-2 gap-3">
                  <button
                    className="bg-green-400 text-white  px-4 py-2 rounded-lg hover:bg-green-500"
                    onClick={handleReplyToComment}
                  >
                    <ReplyIcon /> Reply
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                    onClick={() => setIsReplyBox(null)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        ))
      ) : (
        <p className="text-sm md:text-[14px]">{fetchComment?.length == 0 ?"Loading comments...":"no comments yet" }</p>
      )}
    </div>
  );
};

export default Comment;
