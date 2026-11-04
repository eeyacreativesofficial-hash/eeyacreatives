'use client';

// Cards never play video directly. They link to the detail page.
// This component redirects to ProjectCardCover for backwards compatibility.
import ProjectCardCover from './ProjectCardCover';
import type { Project } from '@/data/content';

interface ProjectCardPlayerProps {
  project: Project;
  activeVideoSlug?: string | null;
  onPlayStart?: (slug: string) => void;
  priority?: boolean;
  inlinePortrait?: boolean;
}

export default function ProjectCardPlayer({
  project,
  priority = false,
}: ProjectCardPlayerProps) {
  return <ProjectCardCover project={project} priority={priority} />;
}
