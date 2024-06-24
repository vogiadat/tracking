const DateCom = ({ title, plainText, value, onChange, min, max }) => (
  <>
    <label className='font-bold text-sm' htmlFor={title}>
      {title}
    </label>
    <input
      id={title}
      min={min}
      max={max}
      name={title}
      value={value}
      onChange={onChange}
      type='date'
      className='mt-2 -mb-8 input input-sm input-bordered min-w-full'
      placeholder={plainText}
      required
    />
  </>
)

export default DateCom
