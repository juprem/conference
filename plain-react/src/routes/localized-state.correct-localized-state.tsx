import { createFileRoute } from '@tanstack/react-router';
import { CorrectStateLocation } from '../pages/LocalizedState/LocalizedState/CorrectStateLocation.tsx';

export const Route = createFileRoute('/localized-state/correct-localized-state')({ component: CorrectStateLocation });
