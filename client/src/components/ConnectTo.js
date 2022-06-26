import { URL_POST_CONNECTIONS } from "../Settings";


const ConnectTo = ({ rest, selectedUserId, connectedUsersIds }) => {

    console.log(connectedUsersIds);
    
    const getConnected = async (restUserId) => {

        if (connectedUsersIds.includes(restUserId)) {
            alert("Both users are already connected")
        } else {
            await fetch(URL_POST_CONNECTIONS, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userId: selectedUserId,
                    connectedId: restUserId
                })
            })
                .then(response => response.json())
                .then(data => console.log(data))
        }
    }
    return (
        <div className="new-connect-item">
            <h3>Connect to: </h3>
            {rest.map((restUser) => {
                return (
                    <div
                        className="connections-item"
                        key={restUser.id}
                        onClick={() => getConnected(restUser.id)}
                    >
                        {restUser.first_name} {restUser.last_name}
                    </div>
                )
            })}
        </div>
    )
}

export default ConnectTo