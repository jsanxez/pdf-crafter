import TextField from '../../ui/textField'

const fields = [
    {label: 'Design', placeholder: 'placeholder', help: 'help'},
    {label: 'Touchpoints to include', placeholder: 'placeholder', help: 'help'},
    {label: 'Digital', placeholder: 'placeholder', help: 'help'},
    {label: 'Project assets', placeholder: 'placeholder', help: 'help'},
    {label: 'Additional notes', placeholder: 'placeholder', help: 'help'},
]

export default function Page() {
    return (
        <>
        {fields.map(field => <TextField key={field.label} label={field.label} placeholder={field.placeholder} />)}
        </>
    )
}
