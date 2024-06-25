const InputCom = ({ type = 'text', id, title, plainText, value, status }) => (
  <>
    <label className='font-bold text-sm' htmlFor={id}>
      {title}
    </label>
    <input
      disabled={status}
      id={id}
      name={id}
      defaultValue={value}
      type={type}
      className='mt-2 -mb-8 input input-bordered min-w-full'
      placeholder={plainText}
      required
    />
  </>
)

export default InputCom
