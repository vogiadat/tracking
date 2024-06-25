import moment from 'moment'

const TrackingList = ({ data }) => {
  return (
    <ul className='mt-4 timeline timeline-vertical'>
      {data.map((item, index) => (
        <li key={item.id ?? index}>
          <hr />
          <div className='timeline-start badge badge-accent text-base-100'>
            {item.createdAt ? moment(item.createdAt).format('MMMM Do YYYY - HH:MM:SS') : ''}
          </div>
          <div className='timeline-middle px-6'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='w-5 h-5'
            >
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          <div className='timeline-end md:text-start mt-8'>
            <div className='text-lg font-black text-accent'>
              {item.title || 'No Data'}
              <span className='badge badge-info text-base-100 font-normal mx-1'>{item.status}</span>
            </div>
            <p className='text-zinc-500 font-semibold'>{item.location}</p>
          </div>
          <hr />
        </li>
      ))}
    </ul>
  )
}

export default TrackingList
