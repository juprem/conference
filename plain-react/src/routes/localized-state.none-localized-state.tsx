import { createFileRoute } from '@tanstack/react-router';
import { NoneLocalizedState } from '../pages/LocalizedState/NoneLocalizedState.tsx';

export const Route = createFileRoute('/localized-state/none-localized-state')({ component: NoneLocalizedState });
