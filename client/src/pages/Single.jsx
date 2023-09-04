// import React, { useEffect, useState } from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
// import axios from "axios";
// import moment from "moment";
// import { useContext } from "react";
// import { AuthContext } from "../context/authContext";
// import DOMPurify from "dompurify";

const Single = () => {
  // const [post, setPost] = useState({});

  // const location = useLocation();
  // const navigate = useNavigate();

  // const postId = location.pathname.split("/")[2];

  // const { currentUser } = useContext(AuthContext);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.get(`/posts/${postId}`);
  //       setPost(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchData();
  // }, [postId]);

  // const handleDelete = async ()=>{
  //   try {
  //     await axios.delete(`/posts/${postId}`);
  //     navigate("/")
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // const getText = (html) =>{
  //   const doc = new DOMParser().parseFromString(html, "text/html")
  //   return doc.body.textContent
  // }

  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
            alt=""
          />
          <div className="user" alt="" />
          <div className="info">
            <span>Jonish</span>
            <p>Posted</p>
          </div>

          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          asperiores, aliquid deleniti excepturi illum ipsa quidem. Tempora
          obcaecati, eaque reprehenderit quibusdam neque atque sapiente
          perferendis, consequatur iste expedita architecto iure!
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
