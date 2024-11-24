"use client";
import addData from "@/server/actions/add-data";
import React, { useEffect, useState } from "react";

const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false); // 控制弹窗的显示和隐藏
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

  // 提交表单
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    closeModal(); // 提交后关闭弹窗
    await addData(title, content); // 调用添加数据的函数
    window.location.reload(); // 提交后刷新页面
  };

  return (
    <div>
      {/* 浮动按钮 */}
      <button
        className="
          fixed bottom-5 right-5 w-16 h-16 
          bg-gray-800 text-white text-3xl rounded-full 
          flex items-center justify-center shadow-lg 
          hover:bg-gray-700 
          dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-700
        "
        onClick={openModal}
      >
        +
      </button>

      {/* 弹窗 */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl mb-4">创建新计划</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  日期
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="mt-2 w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 "
                  placeholder="请输入日期"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  内容
                </label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="mt-2 w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 "
                  placeholder="请输入内容"
                  rows={4}
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={closeModal}
                  className="mr-2 bg-gray-300 text-gray-700 p-2 rounded-md hover:bg-gray-400 dark:bg-gray-600 dark:text-gray-300 dark:hover:bg-gray-500"
                >
                  取消
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800"
                >
                  提交
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingButton;
