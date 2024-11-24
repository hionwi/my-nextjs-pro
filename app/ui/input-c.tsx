"use client";

import { FormEventHandler, SetStateAction, MouseEventHandler } from "react";

export default function InputC(
  handleSubmit: FormEventHandler<HTMLFormElement> | undefined,
  title: string | number | readonly string[] | undefined,
  setTitle: { (value: SetStateAction<string>): void; (arg0: string): void },
  content: string | number | readonly string[] | undefined,
  setContent: { (value: SetStateAction<string>): void; (arg0: string): void },
  closeModal: MouseEventHandler<HTMLButtonElement> | undefined
) {
  return (
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
  );
}
