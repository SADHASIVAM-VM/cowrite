import { useRef, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import ResizeModule from "@botom/quill-resize-module";
import { SendHorizonal } from "lucide-react";
import { useAuth, useUser } from "@clerk/clerk-react";
import toast from "react-hot-toast";
import upload from "../assets/icons/upload.jpg";
import spinners from "../assets/loading/spinner.svg";

// Register the resize module with Quill
Quill.register("modules/resize", ResizeModule);

const URLs = import.meta.env.VITE_BASEURL;

function PostPanel() {
  const ids = useAuth().userId
  const username = useUser().user.username
//console.log(ids)
  const quillRef = useRef(null);
  const [blogData, setBlogData] = useState({
    user_id:'',
    username:'',
    title: "",
    description: "",
    content: "",
    image: null,
  });
  const [loading, setLoading] = useState();
  const [fileName, setFileName] = useState();
  const [imgErr, setImgErr] = useState(null);

  // Quill modules
  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }, { font: [] }],
        [{ size: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
        ],
        ["link", "image", "video"],
        ["clean"],
        [{ align: [] }],
      ],
      handlers: {
        // image: imageHandler, // Attach custom image handler
      },
    },
    resize: {
      locale: {
        altTip: "Hold down the alt key to zoom",
        floatLeft: "Left",
        floatRight: "Right",
        center: "Center",
        restore: "Restore",
      },
    },
  };

  //changeHandle
  const changeHandle = (e) => {
    const { name, value } = e.target;
    setBlogData((prev) => ({ ...prev, [name]: value }));
  };
  // handle Image change

  const HandleFileChange = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    if(file){
      setImgErr(false)
    }
    setFileName(file.name);
    setBlogData((prev) => ({ ...prev, [name]: file }));
  };

  const handleQuillChange = (value) => {
    setBlogData((prev) => ({
      ...prev,
      content: value,
    }));
  };

  // Post blog function
  const postBlog = async () => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("user_id",ids);
      formData.append("username",username);
      formData.append("title", blogData.title);
      formData.append("description", blogData.description);
      formData.append("content", JSON.stringify(blogData.content));

      if (blogData.image) {
        formData.append("image", blogData.image);
      }
      else{
        toast.error("Select Image")
        setImgErr(true)
      }
      

      const post = await fetch(`${URLs}/post`, {
        method: "post",
        body: formData,
      });

      if (post.ok) {
        setLoading(false);
        toast.success("posted");
        setBlogData({
          user_id:'',
          title: "",
          description: "",
          content: "",
          image: '',
        })
        setImgErr(null)
        setFileName("")
      } else {
        setLoading(false);
        toast.error("post un-success");
      }
    } catch (err) {
      setLoading(false);
      console.log("RRR", err);
      toast.error("Something wrong");
    }
  };
  const onsubmitting = (e) => {
    e.preventDefault();
    postBlog();
  };

  // add category
  const optionCreate =()=>{

    const cc = document.getElementById('AddLabel')
    const ccc = document.createElement('option')
    ccc.value = 'ddd'
    ccc.text = `ddd` 
    cc.add(ccc)
    console.log("children : ",ccc)
  }
  
  return (
    <div className="p-2 relative">
      <div className="">
        <form action="" onSubmit={onsubmitting}>
          <div className="flex gap-3 flex-col">
            <input
              name="title"
              required
              type="text"
              placeholder="Blog Title"
              value={blogData.title}
              className="border-2 w-full py-4 px-5 rounded-md"
              onChange={changeHandle}
            />
            <textarea
              required
              name="description"
              type="text"
              placeholder="Short Description..."
              value={blogData.description}
              className="border-2 w-full p-5 rounded-md "
              onChange={changeHandle}
            />
          </div>

          <div className="flex items-center justify-between my-5">
            <label htmlFor="img" className={`${imgErr ==true && "border border-red-500"} ${imgErr == false && " border border-green-500" }  p-2 rounded-md`}>
              <span className="flex items-center gap-3">
                <img
                  src={upload}
                  className="w-16 rounded-md shadow-md cursor-pointer  "
                />
                <i>{fileName ? fileName + "✔️" : "Select Image"}</i>
              </span>
            </label>
            <input             
              id="img"
              name="image"
              type="file"
              onChange={HandleFileChange}
            />
              <div className="flex items-center xl:flex-row flex-col justify-center">
              <input type="text"  placeholder="Add Label" className="w-[100px] p-1 border" onClick={optionCreate}/>
              <select name="" id="AddLabel" className="px-5 py-3" onChange={(e)=> console.log(e.target.value)}>
                
                <option selected disabled>Category</option>
                <option value="Ai">AI</option>
                <option value="Finace">Finace</option>
              </select>
              </div>

            <button
              type="submit"
              className="bg-[#0e78ba] hover:bg-[#0d659b] float-right rounded-lg px-10 py-2 h-14  flex gap-2 items-center"
            >
              <SendHorizonal color="white" />
            </button>
          </div>
        </form>
      </div>

      <div className="">
        <ReactQuill
          ref={quillRef}
          theme="snow"
          modules={modules}
          value={blogData.content}
          onChange={handleQuillChange}
          className="h-[70vh]"
        />
      </div>

      {loading && (
        <div className="absolute top-0 flex h-full w-full justify-center items-center bg-black bg-opacity-60">
          <img src={spinners} alt="" className="w-20" />
        </div>
      )}
    </div>
  );
}

export default PostPanel;
