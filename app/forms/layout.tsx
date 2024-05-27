import StepProgressBar from '../ui/stepprogressbar'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='pt-8'>
            <StepProgressBar />
            <main className='max-w-[480px] flex flex-col gap-6 mx-auto mt-8'>
                {children}
            </main>
        </div>
    )
}
