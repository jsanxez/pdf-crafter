import { useId } from 'react'
import IconButton from './iconButton'

export default function TextField({ label='Label text', placeholder='' }) {
    const id = useId()
    return (
        <div className='inline-flex flex-col'>
            <Label label={label} id={id} />
            <Input placeholder={placeholder} id={id} />
        </div>
    )
}

function Label({ label, id }: { label: string, id: string }) {
    return (
        <div className='flex items-center text-on-surface-variant'>
            <IconButton iconName='expand_circle_up' />
            <label htmlFor={id} className='grow'>{label}</label>
            <IconButton iconName='info' />
        </div>
    )
}

function Input({ placeholder, id }: { placeholder: string, id: string }) {
    let height = 16 + 16 + 10
    const style = 'border border-outline rounded-md mx-3 p-2 resize-y text-on-surface'
    return (
        <textarea name="textfield" id={id} placeholder={placeholder} className={style} style={{minHeight: `${height}px`}} ></textarea>
    )
}
