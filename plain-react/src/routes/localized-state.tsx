import { createFileRoute } from '@tanstack/react-router';
import { LocalizedState } from '../pages/LocalizedState/LocalizedState.tsx';

export const Route = createFileRoute('/localized-state')({ component: LocalizedState });
