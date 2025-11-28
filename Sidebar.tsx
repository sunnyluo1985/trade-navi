import React, { useState, useEffect } from 'react';
import { Category } from './types';
import { ChevronRight, ChevronDown, Rocket } from 'lucide-react';

interface SidebarProps {
  categories: Category[];
  selectedCategoryId: string;
  activeSubTab: string | null;
  onNavigate: (categoryId: string, subCategoryId?: string) => void;
  isMobileOpen: boolean;
  closeMobileSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  categories, 
  selectedCategoryId, 
  activeSubTab,
  onNavigate,
  isMobileOpen,
  closeMobileSidebar
}) => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  useEffect(() => {
    if (selectedCategoryId && !expandedCategories.includes(selectedCategoryId)) {
      setExpandedCategories(prev => [...prev, selectedCategoryId]);
    }
  }, [selectedCategoryId]);

  const toggleExpand = (categoryId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId) 
        : [...prev, categoryId]
    );
  };

  const handleParentClick = (category: Category) => {
    if (!expandedCategories.includes(category.id)) {
      setExpandedCategories(prev => [...prev, category.id]);
    }
    onNavigate(category.id);
    closeMobileSidebar();
  };

  return (
    <>
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={closeMobileSidebar}
        />
      )}

      <aside className={`
        fixed top-0 left-0 z-50 h-full w-64 bg-white border-r border-slate-100 transform transition-transform duration-300 ease-in-out
        lg:relative lg:translate-x-0
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
        flex flex-col
      `}>
        <div className="h-16 flex items-center px-6 border-b border-slate-100 flex-shrink-0">
          <div className="flex items-center gap-2 text-primary">
            <Rocket className="w-7 h-7" />
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight text-slate-800">外贸工具网</span>
              <span className="text-[10px] text-slate-400 font-medium tracking-wider">TRADE NAVI</span>
            </div>
          </div>
        </div>

        <nav className="p-3 space-y-1 overflow-y-auto flex-1 custom-scrollbar">
          {categories.map((category) => {
            const Icon = category.icon;
            const isSelected = selectedCategoryId === category.id;
            const isExpanded = expandedCategories.includes(category.id);
            
            return (
              <div key={category.id} className="mb-1">
                <button
                  onClick={() => handleParentClick(category)}
                  className={`
                    w-full flex items-center justify-between px-3 py-3 rounded-lg text-sm font-bold transition-all duration-200 select-none
                    ${isSelected 
                      ? 'bg-blue-50 text-blue-700' 
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }
                  `}
                >
                  <div className="flex items-center gap-3">
                    <Icon size={18} className={isSelected ? 'text-blue-600' : 'text-slate-400'} />
                    <span>{category.title}</span>
                  </div>
                  <div 
                    onClick={(e) => toggleExpand(category.id, e)}
                    className={`p-1 rounded-md hover:bg-slate-200/50 transition-colors ${isSelected ? 'text-blue-500' : 'text-slate-400'}`}
                  >
                    {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                  </div>
                </button>

                <div className={`
                   overflow-hidden transition-all duration-300 ease-in-out
                   ${isExpanded ? 'max-h-[1000px] opacity-100 mt-1' : 'max-h-0 opacity-0'}
                `}>
                  <div className="flex flex-col space-y-0.5 ml-4 border-l border-slate-100 pl-2">
                    {category.subCategories.map((sub) => {
                      const isSubActive = activeSubTab === sub.id && isSelected;
                      return (
                        <button
                          key={sub.id}
                          onClick={(e) => {
                            e.stopPropagation();
                            onNavigate(category.id, sub.id);
                            closeMobileSidebar();
                          }}
                          className={`
                            relative text-left w-full px-3 py-2 text-[13px] rounded-md transition-colors
                            ${isSubActive
                              ? 'text-primary font-medium bg-blue-50/50'
                              : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                            }
                          `}
                        >
                          {isSubActive && (
                            <span className="absolute left-[-9px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary" />
                          )}
                          {sub.title}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
