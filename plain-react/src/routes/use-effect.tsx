import { createFileRoute } from '@tanstack/react-router';
import { UseEffectCatch } from '../pages/UseEffect/UseEffectCatch.tsx';

export const Route = createFileRoute('/use-effect')({ component: UseEffectCatch });
