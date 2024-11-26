"use client";
import addData from "@/server/actions/add-data";
import React, { useEffect, useState } from "react";
import InputC from "./input-c";

const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false); // 控制弹窗的显示和隐藏
  const [isScroll, setisScroll] = useState(false); // 控制弹窗的显示和隐藏
  const [content, setContent] = useState("");
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().split("T")[0];
  const [title, setTitle] = useState(tomorrowStr);

  // 打开弹窗
  const openModal = () => {
    setIsOpen(true);
  };

  // 关闭弹窗
  const closeModal = () => {
    setIsOpen(false);
  };

  // 监听Esc键关闭弹窗
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // 清除事件监听器
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);





  useEffect(() => {

    function handleScroll() {
      setisScroll(!isScroll);

    }

    window.addEventListener('click', handleScroll);

    return () => {
      window.removeEventListener('click', handleScroll);
    };
  }, [isScroll]);

  // 提交表单
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    closeModal(); // 提交后关闭弹窗
    addData(title, content); // 调用添加数据的函数
  };

  return (
    <div>
      {/* 浮动按钮 */}
      {isScroll && <button
        className={`
          fixed bottom-5 right-5 w-16 h-16 
          bg-gray-800 text-white text-3xl rounded-full 
          flex items-center justify-center shadow-lg 
          hover:bg-gray-700 
          dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-700
          transition-opacity duration-300
        `}
        onClick={openModal}
      >
        +
      </button>}

      {/* 弹窗 */}
      {isOpen &&
        InputC(handleSubmit, title, setTitle, content, setContent, closeModal)}
    </div>
  );
};

export default FloatingButton;
