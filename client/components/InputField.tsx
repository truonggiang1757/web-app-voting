import { useField } from 'formik'

interface InputFieldProps {
    name: string
    label: string
    placeholder: string
    type: string
}

const InputField = (props: InputFieldProps) => {
    const [field, {error}] = useField(props)
  return (
    <div>
        <div>{props.label}</div>
        <input {...field} id={field.name} {...props} className="bg-gray-200 border-none focus:ring-0 text-sm flex-1"/>
        {error}
    </div>
  )
}

export default InputField