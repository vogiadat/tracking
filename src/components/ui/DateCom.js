const DateCom = ({ title, id, plainText, value, min, max }) => {
  const isDateSend = id === 'dateSend'

  return (
    <>
      <label className='font-bold text-sm' htmlFor={id}>
        {title}
      </label>
      <input
        id={id}
        min={isDateSend ? undefined : max}
        max={!isDateSend ? undefined : max}
        name={id}
        defaultValue={value}
        type='date'
        className='mt-2 -mb-8 input input-sm input-bordered min-w-full'
        placeholder={plainText}
        required
      />
    </>
  )
}

export default DateCom
