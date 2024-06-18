const StatusCard = ({ data }) => {

    return data.map(card => (
        <div key={card.id} className="card w-80 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title font-bold">
                    {card.status}
                </h2>
                <span className="badge badge-info text-base-100 text-xs font-bold">{card.createAt}</span>
                <p>{card.location}</p>
                {/* <div className="card-actions justify-end">
                <button className="btn btn-sm btn-primary">Edit</button>
            </div> */}
            </div>
        </div>
    ))
}

export default StatusCard