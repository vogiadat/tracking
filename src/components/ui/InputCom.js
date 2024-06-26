const InputCom = ({
  type = 'text',
  id,
  title,
  name,
  plainText,
  value,
  isDisabled = false,
  className = ''
}) => (
  <>
    <label className='font-bold text-sm' htmlFor={id}>
      {title}
    </label>
    <input
      disabled={isDisabled}
      id={id}
      name={name}
      defaultValue={value}
      type={type}
      className={`mt-2 -mb-8 input input-bordered min-w-full ${className}`}
      placeholder={plainText}
      required
    />
  </>
)

export default InputCom
