
const ConnectTo = ({ rest, getConnected }) => {

    return (
        <div className="new-connect-item">
            <h3>Connect to: </h3>
            {rest.map((user) => {
                return (
                    <div
                        className="connections-item"
                        key={user.id}
                        onClick={() => getConnected(user.id)}
                    >
                        {user.first_name} {user.last_name}
                    </div>
                )
            })}
        </div>
    )
}

export default ConnectTo