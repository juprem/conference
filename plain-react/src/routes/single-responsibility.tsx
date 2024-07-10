import { createFileRoute } from '@tanstack/react-router';
import { MultipleResponsibility } from '../pages/SingleResponsibility/MultipleResponsibility.tsx';

export const Route = createFileRoute('/single-responsibility')({ component: MultipleResponsibility });
