import React from 'react';
// import { Container, Typography, Box, Button } from '@mui/material';
import 'tailwindcss/tailwind.css';

const App: React.FC = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          私のプロファイルページ
        </h1>
        <p className="text-lg mb-4">
          エンジニア学生です。ここに自己紹介やスキルセットを書きます。
        </p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded">
          詳細を見る
        </button>
      </div>
    </div>
  );
};

export default App;