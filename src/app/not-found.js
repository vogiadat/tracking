import SearchInput from '@/components/SearchInput'

const Notfound = () => {
  return (
    <div className='hero bg-neutral/30  min-h-screen'>
      <div className='hero-content text-center text-base-100'>
        <div className='max-w-md'>
          <h1 className='text-5xl font-bold'>
            <span className='text-error'>404</span>
            <br />
            Not Found
          </h1>
          <button className='my-4 btn btn-accent text-base-100'>Go back to homepage</button>
          <SearchInput />
        </div>
      </div>
    </div>
  )
}

export default Notfound
