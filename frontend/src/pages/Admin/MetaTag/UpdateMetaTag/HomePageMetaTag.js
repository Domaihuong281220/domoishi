import React, { useState, useEffect } from "react";
import { Helmet } from 'react-helmet';
import { Space, Table, Button, Modal, Form, Input } from 'antd';
import axios from 'axios';

const columns = (handleEdit) => [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Content',
    dataIndex: 'content',
    key: 'content',
  },
  {
    title: 'Edit',
    key: 'edit',
    render: (_, record) => <Button onClick={() => handleEdit(record)}>Edit</Button>
  },
  {
    title: 'Delete',
    key: 'delete',
    render: (_, record) => <Button>Delete</Button>  // You can also implement deletion here
  },
];

const HomePageMetaTag = () => {
  const [data, setData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://103.157.218.115:8802/metatag');
      if (response.data.data && Array.isArray(response.data.data)) {
        const formattedData = response.data.data.map((item, index) => ({
          key: index,
          title: item.title,
          name: item.name,
          content: item.content
        }));
        setData(formattedData);
      }
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  const handleEdit = (record) => {
    setEditingItem(record);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    console.log('Edited:', editingItem);
    // Call an API to update the data on the server
    // Update the state if needed
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingItem(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full h-fit">
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Home page with dynamic data from API" />
      </Helmet>
      <Table columns={columns(handleEdit)} dataSource={data} />
      <Modal title="Edit Item" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
          <Form.Item label="Title">
            <Input name="title" value={editingItem?.title} onChange={handleChange} />
          </Form.Item>
          <Form.Item label="Name">
            <Input name="name" value={editingItem?.name} onChange={handleChange} />
          </Form.Item>
          <Form.Item label="Content">
            <Input name="content" value={editingItem?.content} onChange={handleChange} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default HomePageMetaTag;
