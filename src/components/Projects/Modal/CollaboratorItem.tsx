import type { CollaboratorI } from '../../../data/DataProjects'; 

interface CollaboratorItemProps {
  collaborator: CollaboratorI;
}

export const CollaboratorItem = ({ collaborator }: CollaboratorItemProps) => (
  <a 
    href={collaborator.link || '#'} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="flex items-center gap-3 p-3 rounded-lg transition-colors bg-gray-100/50 dark:bg-gray-800/50 hover:bg-gray-200 dark:hover:bg-gray-700 border border-transparent hover:border-blue-300 dark:hover:border-blue-600"
  >
    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0">
      {collaborator.name.charAt(0)}
    </div>
    <div className="truncate">
      <p className="text-sm font-semibold text-gray-800 dark:text-white leading-tight truncate">{collaborator.name}</p>
      <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{collaborator.role}</p>
    </div>
  </a>
);