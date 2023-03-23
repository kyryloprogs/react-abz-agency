import { useState } from 'react'
import SuccessForm from './SuccessForm';
import RegisterForm from './RegisterForm';

const PostSection = ({ positionList, setPageNumber, setUsers }) => {

    const [isSended, setIsSended] = useState(false);

    return (
        <>
            {!isSended ? (
                <RegisterForm setIsSended={setIsSended}
                    positionList={positionList}
                    setPageNumber={setPageNumber}
                    setUsers={setUsers} />
            ) : (
                <SuccessForm />
            )}

        </>
    )
}

export default PostSection