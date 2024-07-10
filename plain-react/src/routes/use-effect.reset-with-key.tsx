import { createFileRoute } from '@tanstack/react-router';
import { ParentComponent } from '../pages/UseEffect/WithKey/ParentComponent.tsx';

export const Route = createFileRoute('/use-effect/reset-with-key')({ component: ParentComponent });
