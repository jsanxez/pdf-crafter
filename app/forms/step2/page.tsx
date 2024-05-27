import TextField from '../../ui/textField'

const fields = [
    {label: 'Objectives', placeholder: 'placeholder', help: 'help'},
    {label: 'Impact', placeholder: 'placeholder', help: 'help'},
    {label: 'Likes and dislikes', placeholder: 'placeholder', help: 'help'},
    {label: 'Existing branding or marketing collateral', placeholder: 'placeholder', help: 'help'},
    {label: 'Design considerations', placeholder: 'placeholder', help: 'help'},
    {label: 'How will success be measured', placeholder: 'placeholder', help: 'help'},
    {label: 'Budget', placeholder: 'placeholder', help: 'help'},
    {label: 'Timeline', placeholder: 'placeholder', help: 'help'},
]

export default function Page() {
    return (
        <>
        {fields.map(field => <TextField key={field.label} label={field.label} placeholder={field.placeholder} />)}
        </>
    )
}
