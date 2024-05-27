import TextField from '../../ui/textField'

const fields = [
    {label: 'Project brief title', placeholder: 'placeholder', help: 'help'},
    {label: 'Client name', placeholder: 'placeholder', help: 'help'},
    {label: 'Contact name', placeholder: 'placeholder', help: 'help'},
    {label: 'Contact email', placeholder: 'placeholder', help: 'help'},
]

export default function Page() {
    return (
        <>
        {fields.map(field => <TextField key={field.label} label={field.label} placeholder={field.placeholder} />)}
        </>
    )
}
