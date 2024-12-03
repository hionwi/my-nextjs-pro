"use client";

import { useEffect, useState } from "react";
import InputC from "./input-c";
import updateData from "@/server/actions/update-data";
import deleteData from "@/server/actions/delete-data";

export default function Article({
  id,
  titler,
  contentr,
}: {
  id: number;
  titler: string;
  contentr: string;
}) {
  const [isOpen, setIsOpen] = useState(false); // 控制弹窗的显示和隐藏
  const [title, setTitle] = useState(titler);
  const [content, setContent] = useState(contentr);

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
  const handleEdit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    closeModal(); // 提交后关闭弹窗
    updateData(id, title, content); // 调用更新数据的函数
  };

  const handleDelete = () => {
    if (window.confirm("确定删除吗？")) {
      deleteData(id);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold mb-4 text-center text-gray-900 dark:text-white">{title}</h1>
      <div className="text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
        {content.split('\n').map((line, index) => (
          <p key={index}>
            {line.split('\t').map((segment, i) => {
              const urlRegex = /(https?:\/\/[^\s]+)/g;
              const parts = segment.split(urlRegex);
              return (
                <span key={i} style={{ marginLeft: i > 0 ? '2em' : '0' }}>
                  {parts.map((part, j) => {
                    if (urlRegex.test(part)) {
                      return (
                        <a key={j} href={part} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                          {part}
                        </a>
                      );
                    } else {
                      return part;
                    }
                  })}
                </span>
              );
            })}
          </p>
        ))}
      </div>
      {/* 按钮容器，始终居中 */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={openModal}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          修改
        </button>
        <button
          onClick={handleDelete}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          删除
        </button>
      </div>
      {/* 弹窗 */}
      {isOpen &&
        InputC(handleEdit, title, setTitle, content, setContent, closeModal)}
    </div>
  );
}



