import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setcategories] = useState([])

    useEffect(() => {
        fetch('https://the-dragon-news-server-shamiul-lipu.vercel.app/categories')
            .then(res => res.json())
            .then(data => setcategories(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <h4>All Categories</h4>
            <div className='ps-4 '>
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`} className='text-decoration-none text-black'>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;