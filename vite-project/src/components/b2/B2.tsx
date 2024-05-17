import React, { useEffect, useState } from 'react';

export default function B2() {
    const [count, setCount] = useState<number>(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    useEffect(() => {
        document.title = `Click ${count} lần`; // Sử dụng chuỗi mẫu để cập nhật tiêu đề trang web
    }, [count]); // Thêm count vào mảng dependencies để useEffect chỉ chạy khi count thay đổi

    return (
        <div>
            B2
            <button onClick={handleClick}>Click</button>
        </div>
    );
}
