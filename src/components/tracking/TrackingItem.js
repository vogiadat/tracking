import moment from 'moment'

const TrackingItem = ({ data, setData }) => {
  const { trackingItems } = data

  const handleDelete = async (item) => {
    const isConfirm = confirm(`Do you want to delete status ${item.status}`)
    if (!isConfirm) return
    const res = await fetch(`/api/tracking-item/${item.id}`, { method: 'DELETE' })
    if (!res) return alert("Can't delete tracking")
    const newList = data.trackingItems.filter((con) => con.id !== item.id)
    return setData({ ...data, trackingItems: newList })
  }

  return trackingItems.map((item, index) => (
    <div key={item.id ?? index} className='card w-80 bg-base-100 shadow-xl'>
      <div className='card-body'>
        <h2 className='card-title font-bold'>{item.status}</h2>
        <span className='badge badge-info text-base-100 text-xs font-bold'>
          {item.createdAt ? moment(item.createdAt).format('MMMM Do YYYY - HH:MM:SS') : ''}
        </span>
        <p>{item.location}</p>
        <button type='button' className='btn' onClick={() => item.id && handleDelete(item)}>
          delete
        </button>
        {/* <div className="card-actions justify-end">
                <button className="btn btn-sm btn-primary">Edit</button>
            </div> */}
      </div>
    </div>
  ))
}

export default TrackingItem
