import SearchInput from '@/components/SearchInput'

const Notfound = () => {
  return (
    <div className='hero bg-neutral/30  min-h-screen'>
      <div className='hero-content text-center text-base-100'>
        <div className='max-w-md'>
          <h1 className='text-5xl font-bold'>Not Found Data</h1>
          <div className='my-10'>
            <SearchInput />
          </div>
          <button className='btn btn-accent text-base-100'>Home</button>
        </div>
      </div>
    </div>
  )
}

export default Notfound
