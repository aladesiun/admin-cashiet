import { useEffect } from "react";

const Notification = ({ notifyFailed, notifySuccess }) => {
    useEffect(() => {
        // checkFail(); 
    })
    return (
        <>
            {notifySuccess.status && 
            <div className="alert alert-primary" role="alert">
                {notifyFailed.message}
            </div>
            }
            {notifyFailed.status &&
                 <div className="alert alert-danger" role="alert">
                 {notifyFailed.message}
             </div>
             }
        </>
    );
}

export default Notification;