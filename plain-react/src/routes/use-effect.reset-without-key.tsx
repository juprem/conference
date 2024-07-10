import { createFileRoute } from '@tanstack/react-router';
import { ParentComponent } from '../pages/UseEffect/WithUseEffect/ParentComponent.tsx';

export const Route = createFileRoute('/use-effect/reset-without-key')({ component: ParentComponent });
