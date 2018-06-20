// https://courses.wesbos.com/account/access/5b298a3af9ec296a73d76742/view/195950239

import React from 'react';
import { Link } from 'react-router';

class Main extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    <Link to="/">Reduxstagram</Link>
                </h1>
                {React.cloneElement(this.props.children, this.props)}
            </div>
        );
    }
}

export default Main;
