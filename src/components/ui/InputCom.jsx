const InputCom = ({ type = 'text', title, plainText, value, onChange }) => (<>
    <label className="font-bold text-sm" htmlFor={title}>
        {title}
    </label>
    <input id={title} name={title} value={value} onChange={onChange} type={type} className="mt-2 -mb-8 input input-sm input-bordered min-w-full" placeholder={plainText} required />
</>
)

export default InputCom