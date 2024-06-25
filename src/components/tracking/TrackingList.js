import TrackingItemList from './TrackingItemList'

const TrackingList = ({ data }) => {
  return (
    <ul className='mt-4 timeline timeline-vertical'>
      {data.map((item) => (
        <TrackingItemList key={item.id} {...item} />
      ))}
    </ul>
  )
}

export default TrackingList
