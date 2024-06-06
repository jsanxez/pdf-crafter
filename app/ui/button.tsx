export default function Button ({ type = 'elevated' }) {
    const style = {
        text: '',
        outlined: 'border border-outline',
        filled: 'bg-primary text-on-primary',
        elevated: 'bg-surface-container-low text-primary'
    }
    return (
        <button className={`${style[type]} inline-flex items-center gap-2 rounded-full px-6 font-medium text-sm h-10`}>
            Button
        </button>
    )
}
