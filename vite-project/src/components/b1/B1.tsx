import React, { useEffect, useState } from 'react';

export default function B1() {
    const [title, setTitle] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    useEffect(() => {
        document.title = title;
    });

    return (
        <div>
            B1 <br />
            <input type="text" value={title} onChange={handleInputChange} />
        </div>
    );
}
