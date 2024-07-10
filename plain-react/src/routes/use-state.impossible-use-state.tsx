import { createFileRoute } from '@tanstack/react-router';
import { UseStateImpossible } from '../pages/UseState/UseStateImpossible.tsx';

export const Route = createFileRoute('/use-state/impossible-use-state')({ component: UseStateImpossible });
