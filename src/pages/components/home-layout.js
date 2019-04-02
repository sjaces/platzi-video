import React from 'react';
import './Home-Layout.css';

function HomeLayout(props) {
    return (
        <section className="HomeLayout">
            {props.children}
        </section>
    )
}

export default HomeLayout;