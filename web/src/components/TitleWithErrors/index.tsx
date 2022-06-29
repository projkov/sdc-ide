import { ErrorButton } from 'web/src/components/ErrorButton';
import { Title, TitleWithErrorManager } from 'web/src/containers/Main/types';

interface Props {
    title: Title;
    titleWithErrorManager: TitleWithErrorManager;
}

export function TitleWithErrors({ title, titleWithErrorManager }: Props) {
    const errorCount = titleWithErrorManager.errorCount(title);

    const showError = () => titleWithErrorManager.showError(title);

    return (
        <>
            <span>{title}</span>
            <ErrorButton count={errorCount} showError={showError} />
        </>
    );
}
