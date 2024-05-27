import TextField from '../../ui/textField'

const fields = [
    {label: 'What', placeholder: 'placeholder', help: 'help'},
    {label: 'Why', placeholder: 'placeholder', help: 'help'},
    {label: 'Goals', placeholder: 'placeholder', help: 'help'},
    {label: 'Unique selling points', placeholder: 'placeholder', help: 'help'},
    {label: 'Tone of voice', placeholder: 'placeholder', help: 'help'},
    {label: 'Straplines', placeholder: 'placeholder', help: 'help'},
    {label: 'Audience', placeholder: 'placeholder', help: 'help'},
    {label: 'Profession', placeholder: 'placeholder', help: 'help'},
    {label: 'Personality', placeholder: 'placeholder', help: 'help'},
    {label: 'What they care about', placeholder: 'placeholder', help: 'help'},
    {label: 'Competitors', placeholder: 'placeholder', help: 'help'},
    {label: 'Strategic considerations', placeholder: 'placeholder', help: 'help'},
]

export default function Page() {
    return (
        <>
        {fields.map(field => <TextField key={field.label} label={field.label} placeholder={field.placeholder} />)}
        </>
    )
}
