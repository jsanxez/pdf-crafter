import { symbols } from './fonts'

export default function IconButton({ iconName='settings', filled=false }) {
    return (
        <button className='w-12 h-12'>
            <p className='w-10 h-10 inline-flex items-center justify-center hover:bg-on-surface-08 active:bg-on-surface-12 rounded-full'>
                <span className={`${symbols.variable} ${filled && 'icon-filled'} font-symbols material-symbols`}>
                    {iconName}
                </span>
            </p>
        </button>
    )
}
