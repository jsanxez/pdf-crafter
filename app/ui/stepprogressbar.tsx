import Link from 'next/link'

const formStep = [
    {label: 'Project / Client overview', path: '/forms/step1', status: 'completed', position: 'start'},
    {label: 'Deliverables',              path: '/forms/step2', status: 'completed'},
    {label: 'Design overview',           path: '/forms/step3', status: 'active'},
    {label: 'Contact',                   path: '/forms/step4', status: 'inactive', position: 'end'},
]

export default function StepProgressBar() {
    return (
        <nav className="w-fit mx-auto">
            {formStep.map((step, pos) =>
                (<Step key={step.label} count={pos+1} {...step} />) )}
        </nav>
    )
}

function Step({ count=1, label='text', path='', status='inactive', position='middle' }) {
    return (
        <div className="inline-flex gap-4 flex-col items-center w-32 borderborderblack">
            <Circle count={count} path={path} status={status} position={position} />
            <LabelText label={label} status={status} />
        </div>
    )
}

function Circle({ count=1, path='', status='inactive', position='middle' }) {
    const statusStyle = {
        active: "text-primary border-2 border-primary",
        inactive: "text-on-surface border-2 border-on-surface opacity-[0.38]",
        completed: "text-on-primary bg-primary"
    }

    return (
        <div className="inline-flex w-full items-center">
            <Line isActive={status==='active' || status==='completed'} isVisible={position === 'middle' || position === 'end'} />
            <Link
                href={path}
                className={`${statusStyle[status]} inline-flex items-center justify-center w-10 h-10 rounded-full`}
            >
                {count}
            </Link>
            <Line isActive={status==='completed'} isVisible={position === 'middle' || position === 'start'} />
        </div>
    )
}

function Line({ isActive=true, isVisible=true }) {
    const style = isActive ? 'bg-primary' : 'bg-on-surface opacity-[0.38]'
    return <span className={`h-[2px] w-11 ${isVisible && style}`}></span>
}

function LabelText({ label='text', status='inactive' }) {
    const style =  status === 'inactive' ? 'text-on-surface opacity-[0.38]' : 'text-primary'
    return <h3 className={`${style} text-sm text-center font-medium px-2`}>{label}</h3>
}
