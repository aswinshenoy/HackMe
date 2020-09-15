import React, { useState } from 'react';

import Room from '../components/Room';
import UserForm from '../components/UserForm';
import Base from '../components/Base';

const MainPage = () => {

    const [userInfo, setUserInfo] = useState(null);

    return <Base>
    {   userInfo ? <Room /> :
        <UserForm onComplete={setUserInfo} />
    }
    </Base>

};

export default MainPage;