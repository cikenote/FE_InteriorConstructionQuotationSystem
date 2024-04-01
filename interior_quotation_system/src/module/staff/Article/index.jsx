import React, { useEffect, useRef, useState } from "react";
import TableLayout from "../../../layouts/TableLayout";
import { ARTICLE_COLUMNS, ARTICLE_DATA_SOURCE } from "./constant";
import ArticleModal from "./ArticleModal";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Flex, message } from 'antd';
import { DeleteOutline, EditOutlined } from "@mui/icons-material";
import axios from "axios";
import "./style.scss";

const StaffArticle = () => {
  const articleActionModal = useRef();
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    console.log("Making API call...");
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get("https://swp391api.developvn.click/api/Articles?page=1&pageSize=10&sortByDateDescending=true");
      if (response.data && response.data.responses) {
        setBlogs(response.data.responses.$values);
        console.log(response.data.responses.$values);
      } else {
        console.log("Error fetching articles: Response data or responses are undefined");
      }
    } catch (error) {
      console.log("Error fetching articles: ", error);
    }
  };

  const openEditModal = (blog) => {
    setSelectedBlog(blog);
    articleActionModal.current.openModal();
  };

  const deleteArticle = async (blogId) => {
    try {
      await axios.delete(`https://swp391api.developvn.click/api/Articles/${blogId}`);
      setBlogs(blogs.filter(blog => blog.articleId !== blogId));
      message.success('Xóa bài viết thành công!');
    } catch (error) {
      console.error("Error deleting article:", error);
      message.error('Xóa bài viết thất bại. Vui lòng thử lại sau!');
    }
  };

  return (
    <>
      <ArticleModal ref={articleActionModal} blogs={blogs} selectedBlog={selectedBlog} />
      <div className="content-articles">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 850 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Article Id</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Content</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {blogs && blogs.length > 0 ? (
                blogs.map((blog) => (
                  <TableRow
                    key={blog.articleId}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell>
                      {blog.articleId}
                    </TableCell>
                    <TableCell>{blog.title}</TableCell>
                    <TableCell>{blog.content}</TableCell>
                    <TableCell><img src={blog.img} style={{ width: "100%", height: "130px" }} /></TableCell>
                    <TableCell>
                      <Button icon={<EditOutlined />} type="primary" onClick={() => openEditModal(blog)} />
                      <Button icon={<DeleteOutline />} danger onClick={() => deleteArticle(blog.articleId)} />
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <>Lỗi</>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default StaffArticle;
