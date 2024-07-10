import { createFileRoute } from '@tanstack/react-router';
import { UseState } from '../pages/UseState/UseState.tsx';

export const Route = createFileRoute('/use-state')({ component: UseState });
