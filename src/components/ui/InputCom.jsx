const InputCom = ({ type = 'text', title, plainText, value, onChange, status }) => (<>
    <label className="font-bold text-sm" htmlFor={title}>
        {title}
    </label>
    <input disabled={status} id={title} name={title} value={value} onChange={onChange} type={type} className="mt-2 -mb-8 input input-sm input-bordered min-w-full" placeholder={plainText} required />
</>
)

export default InputCom