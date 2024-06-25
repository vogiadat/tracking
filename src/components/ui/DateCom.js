const DateCom = ({ title, id, plainText, value, min, max }) => (
  <>
    <label className='font-bold text-sm' htmlFor={id}>
      {title}
    </label>
    <input
      id={id}
      min={min}
      max={max}
      name={id}
      defaultValue={value}
      type='date'
      className='mt-2 -mb-8 input input-sm input-bordered min-w-full'
      placeholder={plainText}
      required
    />
  </>
)

export default DateCom
