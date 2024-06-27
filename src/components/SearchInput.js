const SearchInput = ({ handleSubmit }) => {
  return (
    <form action={handleSubmit}>
      <label className='input input-bordered input-accent flex items-center gap-2 '>
        <input
          type='text'
          className='grow text-zinc-700'
          placeholder='Search by tracking number'
          name='trackingId'
        />
        <button type='submit' className='btn btn-sm btn-accent text-base-100'>
          Tracking
        </button>
      </label>
    </form>
  )
}

export default SearchInput
