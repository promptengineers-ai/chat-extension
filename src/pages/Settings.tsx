import { useAppContext } from '../contexts/AppContext'

export default function Settings() {
    const appContext = useAppContext();

    return (
        <>
            <h2>Settings</h2>
            <h3>
            { appContext.hello }
            </h3>
        </>
    );
}